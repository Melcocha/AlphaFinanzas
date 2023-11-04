import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function AjusteScreen() {
  const [editCredentials, setEditCredentials] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSaveChanges = () => {
    if (newEmail) {
      Alert.alert(
        'Confirmación',
        '¿Estás seguro de que deseas cambiar tu correo electrónico?',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Confirmar',
            onPress: async () => {
              const user = auth().currentUser;

              try {
                if (user.emailVerified) {
                  console.log('Correo electrónico verificado');
                }

                const updateEmail = await user.verifyBeforeUpdateEmail(newEmail);

                console.log('Correo electrónico actualizado exitosamente');
                Alert.alert('Correo actualizado correctamente');
                setEditCredentials(false);
              } catch (error) {
                console.error('Error:', error);
              }
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
    }
  };

  const handleSaveChangesPassword = () => {
    if (newPassword) {
      Alert.alert(
        'Confirmación',
        '¿Estás seguro de que deseas cambiar tu contraseña?',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Confirmar',
            onPress: async () => {
              const user = auth().currentUser;

              try {
                if (user.emailVerified) {
                  console.log('Correo electrónico verificado');
                }

                const updatePassword = await user.updatePassword(newPassword);

                console.log('Contraseña actualizada exitosamente');
                Alert.alert('Contraseña actualizada correctamente');
                setEditPassword(false);

              } catch (error) {
                console.error('Error:', error);
              }
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
    }
  };

  const handleCancel = () => {
    setNewEmail('');
    setNewPassword('');
    setEditCredentials(false);
    setEditPassword(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajustes</Text>
      <Image
        source={require('../assets/settings.png')}
        style={styles.image}
      />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cambiar Email</Text>
        {editCredentials ? (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Nuevo Email"
              value={newEmail}
              onChangeText={(text) => setNewEmail(text)}
            />
            <Button title="Guardar Cambios" onPress={handleSaveChanges} />
          </View>
        ) : (
          <Button title="Editar Email" onPress={() => setEditCredentials(true)} />
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cambiar Contraseña</Text>
        {editPassword ? (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Nueva Contraseña"
              value={newPassword}
              onChangeText={(text) => setNewPassword(text)}
            />
            <Button title="Guardar Cambios" onPress={handleSaveChangesPassword} />
          </View>
        ) : (
          <Button title="Cambiar Contraseña" onPress={() => setEditPassword(true)} />
        )}
      </View>

      <Button title="Cancelar" onPress={handleCancel} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    padding: 8,
  },
});
