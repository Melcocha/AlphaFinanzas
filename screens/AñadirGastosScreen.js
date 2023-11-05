import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import firestore from "@react-native-firebase/firestore";

const windowWidth = Dimensions.get("window").width;

const AñadirGastosScreen = () => {
  const navigation = useNavigation();

  const [valor, setValor] = useState(""); // Estado para el valor
  const [comentario, setComentario] = useState(""); // Estado para el comentario
  const [iconoSeleccionado, setIconoSeleccionado] = useState(null);
  const [urlSeleccionado, setUrlSeleccionado] = useState(null);

  const handleIconPress = (iconName, url) => {
    // Deseleccionar el icono previamente seleccionado si hay uno
    if (iconoSeleccionado === iconName) {
      setIconoSeleccionado(null);
      setUrlSeleccionado(null);
    } else {
      // Seleccionar el nuevo icono
      setIconoSeleccionado(iconName);
      setUrlSeleccionado(url);
    }
  };

  const categorias = [
    {
      icono: "Salud",
      url: "https://firebasestorage.googleapis.com/v0/b/alpha-finanzas.appspot.com/o/Catgastos%2FheartCAT.png?alt=media&token=ee07d2f6-1b14-442e-b489-9caa3a1b3c2d",
    },
    {
      icono: "Ocio",
      url: "https://firebasestorage.googleapis.com/v0/b/alpha-finanzas.appspot.com/o/Catgastos%2FwalletCAT.png?alt=media&token=680f6c8a-8602-4683-bd19-20622ad45906",
    },
    {
      icono: "Casa",
      url: "https://firebasestorage.googleapis.com/v0/b/alpha-finanzas.appspot.com/o/Catgastos%2FhomeCAT.png?alt=media&token=72208754-6130-4e9f-bcda-f355f06cebbf",
    },
    {
      icono: "Café",
      url: "https://firebasestorage.googleapis.com/v0/b/alpha-finanzas.appspot.com/o/Catgastos%2FcoffeeCAT.png?alt=media&token=4dc83e41-6530-4cce-a89e-0365da83c18e",
    },
    {
      icono: "Educación",
      url: "https://firebasestorage.googleapis.com/v0/b/alpha-finanzas.appspot.com/o/Catgastos%2FmortarboardCAT.png?alt=media&token=75d3e72b-caf7-46e4-ac83-1c69252a9399",
    },
    {
      icono: "Regalos",
      url: "https://firebasestorage.googleapis.com/v0/b/alpha-finanzas.appspot.com/o/Catgastos%2FgiftboxCAT.png?alt=media&token=04e679ee-bbb4-40df-9b6c-1dafcf5c3fbe",
    },
    {
      icono: "Comida",
      url: "https://firebasestorage.googleapis.com/v0/b/alpha-finanzas.appspot.com/o/Catgastos%2Fhealthy-foodCAT.png?alt=media&token=b2cf4201-f59a-4151-a1cd-65a98a31adf9",
    },
    {
      icono: "Otros",
      url: "https://firebasestorage.googleapis.com/v0/b/alpha-finanzas.appspot.com/o/Catgastos%2FinterrogationmarkCAT.png?alt=media&token=618ef74d-c8e4-4131-b7d8-ebe61b3208db",
    },
  ];

  const save = () => {
    if (!valor || valor.trim() === "" || valor < 0) {
      // Verifica si el campo de valor está vacío o solo contiene espacios en blanco
      Alert.alert("AVISO", "Debes ingresar un Monto válido");
    } else if (!iconoSeleccionado) {
      // Si no se ha seleccionado un ícono, muestra una alerta
      Alert.alert("AVISO", "Debes seleccionar una categoría");
    } else {
      // Si hay un valor y se ha seleccionado un ícono, realiza la inserción en la base de datos
      firestore().collection("Gastos").add({
        valor: valor,
        comentario: comentario,
        categoria: iconoSeleccionado,
        CatURL: urlSeleccionado, // Utiliza la categoría seleccionada
      });
      Alert.alert("Se ha agregado exitosamente su transacción");
      navigation.navigate("Gastos");
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
            onPress={() => navigation.navigate("AñadirIngresos")}
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
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>Cuenta:</Text>
        <Text style={{ fontSize: 14 }}>Principal</Text>
        <Text style={styles.titulo}>Categorías</Text>
        <View style={styles.iconoContainer}>
          {categorias.map((cat, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleIconPress(cat.icono, cat.url)}
              style={[
                styles.iconoWrapper,
                {
                  borderColor:
                    iconoSeleccionado === cat.icono ? "blue" : "transparent",
                  backgroundColor:
                    iconoSeleccionado === cat.icono
                      ? "lightblue"
                      : "transparent",
                },
              ]}
            >
              <View style={styles.icono}>
                <Image
                  source={{ uri: cat.url }}
                  style={{ width: 55, height: 55 }}
                />
              </View>
              <Text style={styles.iconoTexto}>{cat.icono}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.comentarioContainer}>
          <Text style={styles.titulo}>Comentario:</Text>
          <TextInput
            placeholder="Comentario:"
            style={styles.inputComentario}
            onChangeText={(value) => handleChangeText(value, "comentario")}
          />
        </View>
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
    backgroundColor: "#fff",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderWidth: 2,
    borderColor: "#64748B",
    shadowOpacity: 1,
  },
  botonesCat: {
    marginTop: 10,
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
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    alignSelf: "center",
    width: "80%",
  },
  categoriasContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    marginTop: 8,
    marginHorizontal: 8,
    borderWidth: 2,
    borderColor: "#64748B",
    shadowOpacity: 1,
  },
  comentarioContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
  inputDolar: {
    width: "80%",
    height: 50,
    paddingHorizontal: 15,
    fontSize: 22,
    borderWidth: 2,
    borderColor: "#64748B",
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
    width: "25%",
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
    borderWidth: 2,
    borderColor: "#64748B",
    shadowOpacity: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  botonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  botonAñadir: {
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
});

export default AñadirGastosScreen;
