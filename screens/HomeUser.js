import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreenUser = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    
    navigation.navigate('Registro');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={require('../assets/icon.png')} 
          style={styles.logo}
        />
        <Text
              style={{ fontSize: 26, fontWeight: "bold", color: "#FFC436", marginTop:10}}
            >
              Alpha Finanzas
            </Text>
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FFC436', borderRadius: 5 }]}
          onPress={handleLogin}
        >
          <Text style={[styles.buttonText, { color: 'black' }]}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FFC436', borderRadius: 5 }]}
          onPress={handleRegister}
        >
          <Text style={[styles.buttonText, { color: 'black' }]}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27374D', 
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  button: {
    width: '90%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginTop:25
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreenUser;
