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

    //AGREGAR VALIDACION

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
      <View style={styles.tittlesection}>
        <Image source={require("../assets/icon.png")} style={styles.logo} />
        <Text style={styles.title}>Iniciar Sesión</Text>
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

      </View>

      <View style={styles.bottonSection}>
        <TouchableOpacity style={[styles.buttonLogin]} onPress={handleSignIn}>
          <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>
            Iniciar Sesión
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonLoginGoogle]}
          onPress={onGoogleButtonPress}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
            Login with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Registro")}>
          <Text style={styles.buttonregister}>
            ¿No tienes una cuenta? Registrate aquí
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
    marginBottom: 20,
  },
  buttonLoginGoogle: {
    width: "100%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4285f4",
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonregister: {
    textAlign: "center",
    color: "#27374D",
    textDecorationLine: "underline",
    fontSize:16
  },
  input: {
    padding: 10,
    borderWidth: 3,
    borderColor: "#64748B",
    shadowOpacity: 1,
    borderRadius: 5,
    fontSize: 14,
    marginBottom: 30
  },
  InputTittle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LoginScreen;
