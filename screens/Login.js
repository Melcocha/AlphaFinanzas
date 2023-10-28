import React, { useEffect, useState } from "react";
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
import ButtonGoogle from "./ButtonLogin.js";
//login con google
import { GoogleSignin } from "@react-native-google-signin/google-signin";

//login con firebase
import auth from "@react-native-firebase/auth";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Login con Google
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "12861391905-v4vq8flv79cijbe2ubk6j6glaadbi5f5.apps.googleusercontent.com",
    });
  }, []);

  async function onGoogleButtonPress() {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      // Get the users ID token
      const { idToken, user } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      console.log(user);
      Alert.alert("Se inicio sesión correctamente");
      navigation.navigate("Inicio");

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }
  }

  // Inicio de sesion normal
  const handleSignIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        console.log("Logeado exitosamente");
        Alert.alert("logeado exitosamente, Bienvenido: " + email);
        navigation.navigate("Inicio");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-login") {
          Alert.alert("El correo o contraseña son incorrectos!");
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

      <Text style={styles.title}>Iniciar Sesión</Text>
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
      <Button title="Iniciar Sesión" onPress={handleSignIn} color="#FFD700" />
      <Button title="Login With Google" onPress={onGoogleButtonPress} />
      <TouchableOpacity onPress={() => navigation.navigate("Registro")}>
        <Text style={styles.registerText}>
          ¿No estás registrado? Registrarse
        </Text>
      </TouchableOpacity>
      <ButtonGoogle />
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
  registerText: {
    textAlign: "center",
    marginTop: 20,
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
