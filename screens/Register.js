import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import auth from "@react-native-firebase/auth";

const RegisterScreen = () => {
  const navigation = useNavigation();

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
      <View style={styles.tittlesection}>
        <Image source={require("../assets/icon.png")} style={styles.logo} />
        <Text style={styles.title}>Crear una cuenta</Text>
      </View>
      <View style={styles.inputsection}>
        <Text style={styles.InputTittle}>Correo Electrónico:</Text>
        <TextInput
          placeholder="Correo Electrónico"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <Text style={styles.InputTittle}>Contraseña:</Text>
        <TextInput
          placeholder="Contraseña"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.input}
        />
        <Text style={styles.InputTittle}>Confirmar Contraseña:</Text>
        <TextInput
          placeholder="Confirmar Contraseña"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <View style={styles.buttonsection}>
      <TouchableOpacity
        style={[styles.buttonLogin]}
        onPress={handleCreateAccount}
      >
        <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>
          Crear Cuenta
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.buttonlogin}>
          ¿Ya tienes una cuenta? Ingresa aquí
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 18,
  },
  tittlesection: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputsection: {
    justifyContent: "space-between",
  },
  bottonSection: {
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  buttonLogin: {
    width: "100%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFC436",
    borderRadius: 5,
    marginBottom: 20
  },
  input: {
    padding: 10,
    borderWidth: 3,
    borderColor: "#64748B",
    shadowOpacity: 1,
    borderRadius: 5,
    fontSize: 14,
    marginBottom: 25
  },
  buttonlogin: {
    textAlign: "center",
    color: "#27374D",
    textDecorationLine: "underline",
    fontSize:16
  },
  InputTittle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RegisterScreen;
