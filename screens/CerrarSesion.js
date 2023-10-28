import React from "react";
import { View, Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

const CerrarSesionScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log("Se cerro la sesion con exito");
        Alert.alert("Se cerro la sesión con exito");
        navigation.navigate("LoginHome");
      })

      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  const handleSignOutGoogle = async () => {
    try {
      await GoogleSignin.signOut();
      await auth().signOut();
      console.log("Se cerro la sesion con exito");
      Alert.alert("Se cerro la sesión con exito");
      navigation.navigate("LoginHome");
    } catch (error) {
      console.log(error);
      Alert.alert(error.message);
    }
  };

  return (
    <View>
      <Button title="Cerrar Sesión" onPress={handleSignOut} color="#FFD700" />
      <Button title="Cerrar Sesión con Google" onPress={handleSignOutGoogle} />
    </View>
  );
};

export default CerrarSesionScreen;
