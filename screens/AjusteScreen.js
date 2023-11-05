import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import auth from "@react-native-firebase/auth";

export default function AjusteScreen() {
  const [editCredentials, setEditCredentials] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSaveChanges = () => {
    if (newEmail) {
      Alert.alert(
        "Confirmación",
        "¿Estás seguro que deseas cambiar tu correo electrónico?",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Confirmar",
            onPress: async () => {
              const user = auth().currentUser;

              try {
                if (user.emailVerified) {
                  console.log("Correo electrónico verificado");
                }

                const updateEmail = await user.verifyBeforeUpdateEmail(
                  newEmail
                );

                console.log("Correo electrónico actualizado exitosamente");
                Alert.alert("Correo actualizado correctamente");
                setEditCredentials(false);
              } catch (error) {
                console.error("Error:", error);
              }
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert("Error", "Por favor, completa todos los campos.");
    }
  };

  const handleSaveChangesPassword = () => {
    if (newPassword) {
      Alert.alert(
        "Confirmación",
        "¿Estás seguro de que deseas cambiar tu contraseña?",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Confirmar",
            onPress: async () => {
              const user = auth().currentUser;

              try {
                if (user.emailVerified) {
                  console.log("Correo electrónico verificado");
                }

                const updatePassword = await user.updatePassword(newPassword);

                console.log("Contraseña actualizada exitosamente");
                Alert.alert("Contraseña actualizada correctamente");
                setEditPassword(false);
              } catch (error) {
                console.error("Error:", error);
              }
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert("Error", "Por favor, completa todos los campos.");
    }
  };

  const handleCancel = () => {
    setNewEmail("");
    setNewPassword("");
    setEditCredentials(false);
    setEditPassword(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajustes</Text>
      <Image source={require("../assets/settings.png")} style={styles.image} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cambiar Email:</Text>
        {editCredentials ? (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Ingresa el nuevo Email..."
              value={newEmail}
              onChangeText={(text) => setNewEmail(text)}
            />
            <TouchableOpacity
              onPress={handleSaveChanges}
              style={styles.btnS}
            >
              <Text style={styles.btnTittle}>Guardar Cambios</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => setEditCredentials(true)}
            style={styles.btnP}
          >
            <Text style={styles.btnTittle}>EDITAR EMAIL</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cambiar Contraseña:</Text>
        {editPassword ? (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Ingresa la nueva Contraseña..."
              secureTextEntry
              value={newPassword}
              onChangeText={(text) => setNewPassword(text)}
            />
            <TouchableOpacity
              onPress={handleSaveChangesPassword}
              style={styles.btnS}
            >
              <Text style={styles.btnTittle}>Guardar Cambios</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => setEditPassword(true)}
            style={styles.btnP}
          >
            <Text style={styles.btnTittle}>CAMBIAR CONTRASEÑA</Text>
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity onPress={handleCancel} style={styles.btnP}>
        <Text style={styles.btnTittle}>CANCELAR</Text>
      </TouchableOpacity>
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
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  image: {
    width: 180,
    height: 180,
    alignSelf: "center",
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 3,
    borderColor: "#64748B",
    shadowOpacity: 1,
    borderRadius: 5,
    fontSize: 14,
    padding: 10,
  },
  btnP: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFC436",
    height: 50,
    borderRadius: 5,
  },
  btnS: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6969",
    height:40,
    width:140,
    borderRadius: 5,
  },
  btnTittle: {
    fontSize: 14,
    fontWeight: "500",
  },
});
