import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { crear } from '../src/api/api.js';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {

    if(password !== confirmPassword){
      alert('Las password son diferentes')
      return;
    }

    const data = {
      nombre: nombre,
      apellido: apellido,
      email: email,
      password: password
    }

    const crearUsuario = await crear(data);

    if (crearUsuario.data == 'ok') {
      alert('Usuario creado correctamente, logeate');
      navigation.navigate('Login');
    }

    if(crearUsuario.data == 'El correo ya se encuentra registrado'){
      alert('El email ya existe');
      return;
    }
  };

  return (
    <View style={styles.container}>
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
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Confirmar Contraseña"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Crear Cuenta" onPress={handleRegister} color="#FFD700" />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>¿Ya te encuentras logeado? Logeate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
  },
  loginText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default RegisterScreen;
