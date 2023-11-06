import React from "react";
import { View, Alert, StyleSheet, TouchableOpacity, Text} from "react-native";
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
        Alert.alert("AVISO","Se cerro la sesión exitosamente");
        navigation.navigate("LoginHome");
      })

      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

    const email = auth().currentUser.email;


  const handleSignOutGoogle = async () => {
    try {
      await GoogleSignin.signOut();
      await auth().signOut();
      console.log("Se cerro la sesion con exito");
      Alert.alert("AVISO","Se cerro la sesión con exito");
      navigation.navigate("LoginHome");
    } catch (error) {
      console.log(error);
      Alert.alert(error.message);
    }
  };

  return (
    <View>
      <View style={{justifyContent:'center', alignItems: 'center', marginTop: 30}}>

        <Text style={{alignItems: 'center', justifyContent: 'center', color:'black', fontSize:18, fontWeight:'bold' }}>Usuario: </Text>
        <Text style={{alignItems: 'center', justifyContent: 'center', color:'black', fontSize:18, fontWeight:'bold' }}>  {email}</Text>

      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={[styles.buttonLogin]}
          onPress={handleSignOut}
        >
          <Text style={{color:'black', fontSize:18, fontWeight:'bold'}}>Cerrar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonLoginGoogle]}
          onPress={handleSignOutGoogle}
        >
          <Text style={{color:'#fff', fontSize:18, fontWeight:'bold'}}>Sign Out with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomSection: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f2f2f2", 
    padding:10
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
});

export default CerrarSesionScreen;
