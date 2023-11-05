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

const AñadirIngresosScreen = () => {
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
      icono: "Salario",
      url: "https://firebasestorage.googleapis.com/v0/b/alpha-finanzas.appspot.com/o/Catingresos%2FsalarioCAT.png?alt=media&token=a1990cc3-7074-490c-a81a-df0eb28fe372",
    },
    {
      icono: "Regalos",
      url: "https://firebasestorage.googleapis.com/v0/b/alpha-finanzas.appspot.com/o/Catingresos%2FgiftboxCAT.png?alt=media&token=8e5abec9-4f11-4135-a232-966902ed0e48",
    },
    {
      icono: "Intereses",
      url: "https://firebasestorage.googleapis.com/v0/b/alpha-finanzas.appspot.com/o/Catingresos%2FbankCAT.png?alt=media&token=e4f7a8b4-5daa-43ae-bd89-edd92a43edfd",
    },
    {
      icono: "Otros",
      url: "https://firebasestorage.googleapis.com/v0/b/alpha-finanzas.appspot.com/o/Catingresos%2FinterrogationmarkCAT.png?alt=media&token=70bd240e-e79b-477a-b9bb-b363495d62ed",
    },
  ];
  //console.log(categorias);
  /*
categorias.map((cat, index) => (
  console.log(cat.url)
))
*/
  const save = () => {
    if (!valor || valor.trim() === "" || valor < 0) {
      // Verifica si el campo de valor está vacío o solo contiene espacios en blanco
      Alert.alert("AVISO", "Debes ingresar un Monto válido");
    } else if (!iconoSeleccionado) {
      // Si no se ha seleccionado un ícono, muestra una alerta
      Alert.alert("AVISO", "Debes seleccionar una categoría");
    } else {
      // Si hay un valor y se ha seleccionado un ícono, realiza la inserción en la base de datos
      firestore().collection("Ingresos").add({
        valor: valor,
        comentario: comentario,
        categoria: iconoSeleccionado,
        CatURL: urlSeleccionado, // Utiliza la categoría seleccionada
      });
      Alert.alert("Se ha agregado exitosamente su transacción");
      navigation.navigate("Ingresos");
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
                color: "#FFC436",
                textDecorationLine: "underline",
              }}
            >
              INGRESOS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("AñadirGastos")}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
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
        <Text style={styles.titulo}>Categorías:</Text>
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

export default AñadirIngresosScreen;
