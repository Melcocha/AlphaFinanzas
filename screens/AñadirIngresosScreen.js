import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
  Dimensions,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import firestore from "@react-native-firebase/firestore";

const windowWidth = Dimensions.get("window").width;

const AñadirIngresosScreen = () => {
  const navigation = useNavigation();

  const [monto, setMonto] = useState("");
  const [iconoSeleccionado, setIconoSeleccionado] = useState(null);

  const handleIconPress = (iconName) => {
    // Deseleccionar el icono previamente seleccionado si hay uno
    if (iconoSeleccionado === iconName) {
      setIconoSeleccionado(null);
    } else {
      // Seleccionar el nuevo icono
      setIconoSeleccionado(iconName);
    }
  };
  const categorias = {
    icono1: "Salario",
    icono2: "Regalos",
    icono3: "Intereses",
    icono4: "Otros",
  };

  const [valor, setValor] = useState(""); // Estado para el valor
  const [comentario, setComentario] = useState(""); // Estado para el comentario

  const save = () => {
    if (iconoSeleccionado) {
      // Verifica si se ha seleccionado un ícono
      firestore().collection("Ingresos").add({
        valor: valor,
        comentario: comentario,
        categoria: categorias[iconoSeleccionado], // Utiliza la categoría seleccionada
      });
    } else {
      // Si no se ha seleccionado un ícono, muestra una alerta
      Alert.alert("Error", "Debes seleccionar una categoría");
    }
  };
  const handleChangeText = (value, field) => {
    if (field === "valor") {
      setValor(value);
    } else if (field === "comentario") {
      setComentario(value);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.menuSupCat}>
        <View style={styles.botonesCat}>
          <TouchableOpacity
            onPress={() => navigation.navigate("CategoriaIngresos")}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              INGRESOS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "#FFC436",
                textDecorationLine: "underline",
              }}
            >
              GASTOS
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputDolarContainer}>
          <TextInput
            placeholder="$"
            keyboardType="numeric"
            style={styles.inputDolar}
            onChangeText={(value) => handleChangeText(value, "valor")}
          />
        </View>
      </View>

      <View style={styles.categoriasContainer}>
        <Text style={styles.titulo}>Categorías</Text>
        <View style={styles.iconoContainer}>
          {Object.keys(categorias).map((iconName, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleIconPress(iconName)}
              style={[
                styles.iconoWrapper,
                {
                  borderColor:
                    iconoSeleccionado === iconName ? "blue" : "transparent",
                  backgroundColor:
                    iconoSeleccionado === iconName
                      ? "lightblue"
                      : "transparent",
                },
              ]}
            >
              <View style={styles.icono}>
                <Icon name="heart-o" size={40} />
              </View>
              <Text style={styles.iconoTexto}>{categorias[iconName]}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.comentarioContainer}>
        <Text style={styles.titulo}>Comentario</Text>
        <TextInput
          placeholder="Comentario"
          style={styles.inputComentario}
          onChangeText={(value) => handleChangeText(value, "comentario")}
        />
      </View>

      <View style={styles.botonContainer}>
        <View style={styles.botonContainer}>
          <TouchableOpacity
            style={[
              styles.botonAñadir,
              { backgroundColor: "#FFC436", borderRadius: 10 },
            ]}
            onPress={save}
          >
            <Text style={[styles.buttonText, { color: "black" }]}>Añadir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuSupCat: {
    flex: 1,
    backgroundColor: "#fff",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderWidth: 2,
    borderColor: "#a8a8a8",
    shadowOpacity: 1,
  },
  botonesCat: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 35,
    paddingRight: 35,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  inputDolarContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    alignSelf: "center",
    width: "80%",
  },
  categoriasContainer: {
    flex: 2,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    margin: 8,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#a8a8a8",
    shadowOpacity: 1,
  },
  comentarioContainer:{
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    margin: 8,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#a8a8a8",
    shadowOpacity: 1,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  inputDolar: {
    width: "80%",
    height: 50,
    paddingHorizontal: 15,
    fontSize: 25,
    borderWidth: 2,
    borderColor: "#a8a8a8",
    shadowOpacity: 1,
    borderRadius: 10,
  },
  textoCuentaPrincipal: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  iconoContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  iconoWrapper: {
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  icono: {
    borderWidth: 1,
    borderColor: "transparent",
    backgroundColor: "transparent",
    borderRadius: 50, // Para hacer que los iconos sean circulares
    padding: 10,
  },
  iconoTexto: {
    fontSize: 16,
    marginTop: 5,
  },
  inputComentario: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  botonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20, // Espacio inferior
  },
  botonAñadir: {
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
});

export default AñadirIngresosScreen;
