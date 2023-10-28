import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import auth from "@react-native-firebase/auth";

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCreateAccount = () => {
    if (password !== confirmPassword) {
      alert("Las contraseñas son diferentes");
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        console.log("Cuenta creada con exito");
        Alert.alert("Cuenta creada con exito " + email);
        navigation.navigate("Login");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Alert.alert(
            "La dirección de correo electrónico ya se encuentra registrada!"
          );
        }

        if (error.code === "auth/invalid-email") {
          Alert.alert("La dirección de correo electrónico es invalida");
        }
        if (error.code === "auth/weak-password") {
          Alert.alert("La contraseña debe tener 6 carácteres o más");
        }
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 25,
        }}
      >
        <Image source={require("../assets/icon.png")} style={styles.logo} />
      </View>
      <Text style={styles.title}>Crear una cuenta</Text>
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
      />
      <TextInput
        placeholder="Apellido"
        value={apellido}
        onChangeText={setApellido}
        style={styles.input}
      />
      <TextInput
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Confirmar Contraseña"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button
        title="Crear Cuenta"
        onPress={handleCreateAccount}
        color="#FFD700"
      />
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginText}>
          ¿Ya tienes una cuenta? Ingresa aquí
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    marginBottom: 16,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "blue",
  },
  loginText: {
    textAlign: "center",
    marginTop: 20,
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default RegisterScreen;
