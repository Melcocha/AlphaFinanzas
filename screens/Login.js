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
      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={[styles.buttonLogin]}
          onPress={handleSignIn}
        >
          <Text style={{color:'black', fontSize:18, fontWeight:'bold'}}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonLoginGoogle]}
          onPress={onGoogleButtonPress}
        >
          <Text style={{color:'#fff', fontSize:18, fontWeight:'bold'}}>Login with Google</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Registro")}>
        <Text style={styles.registerText}>
          ¿No estás registrado? Registrarse
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
  bottomSection: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f2f2f2", 
  },
  buttonLogin: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#FFC436', 
    borderRadius: 10 
  },
  buttonLoginGoogle: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#4285f4', 
    borderRadius: 10 
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
