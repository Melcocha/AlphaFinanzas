import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
// Importa DateTimePickerModal
const windowWidth = Dimensions.get("window").width;
const AñadirTransaccionScreen = () => {
const [monto, setMonto] = useState("");
const [comentario, setComentario] = useState("");
const [iconosSeleccionados, setIconosSeleccionados] = useState({
    icono1: false,
    icono2: false,
    icono3: false,
    icono4: false,
  });
  const styles = {
    contenedorPrincipal: {
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    titulo: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 10,
    },
    inputDolar: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: "40%",
      height: 50,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 10,
      paddingHorizontal: 15,
      fontSize: 18,
      marginTop: 20,
      alignSelf: "center",
    },
    textoCuentaPrincipal: {
      fontSize: 20,
      fontWeight: "bold",
      marginVertical: 10,
    },
    iconoContainer: {
      width: "50%",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20,
    },
    icono: {
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: "transparent",
      backgroundColor: "transparent",
    },
    iconoTexto: {
      fontSize: 16,
      marginTop: 5,
    },
    inputComentario: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      padding: 10,
      marginBottom: 20, // Espacio inferior
      width: 420, // Ajusta el ancho al 100% del contenedor
    },
    container: {
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    botonContainer: {
      flex: 1, // Cambia a flex: 1 para centrar verticalmente
      justifyContent: "center",
      alignItems: "center",
      marginBottom: -100, // Espacio inferior
    },
    botonAñadir: {
      width: "400px", // Cambia a porcentaje para ajustar el ancho
    },
  };
  

  return (
    <View>
        <TextInput
            placeholder="$"
            value={monto}
            onChangeText={(text) => setMonto(text)}
            keyboardType="numeric"
            style={{
                width: "40%", // Ancho del 80% de la pantalla
                height: 50,
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 10,
                paddingHorizontal: 15,
                fontSize: 18, // Tamaño de fuente
                marginTop: 20, // Espacio superior
                alignSelf: "center", // Centrar horizontalmente
            }}
        />
        <Text style={styles.titulo}>Cuenta</Text>
        <Text>Principal</Text>

        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <TouchableOpacity
            onPress={() =>
                setIconosSeleccionados({
                ...iconosSeleccionados,
                icono1: !iconosSeleccionados.icono1,
                })
            }
            style={{
                width: "50%",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderColor: iconosSeleccionados.icono1 ? "blue" : "transparent",
                backgroundColor: iconosSeleccionados.icono1 ? "red" : "transparent",
            }}
            >
            <Icon name="heart-o" size={40} />
            <Text style={styles.iconoTexto}>Salud</Text>
            </TouchableOpacity>
            {/* Repite esto para los otros iconos */}
            {/* Icono 2 */}
            <TouchableOpacity
            onPress={() =>
                setIconosSeleccionados({
                ...iconosSeleccionados,
                icono2: !iconosSeleccionados.icono2,
                })
            }
            style={{
                width: "50%",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderColor: iconosSeleccionados.icono2 ? "blue" : "transparent",
                backgroundColor: iconosSeleccionados.icono2 ? "lightgreen" : "transparent",
            }}
            >
            <Icon name="dribbble" size={40} />
            <Text>Ocio</Text>
            </TouchableOpacity>
            {/* Icono 3 */}
            <TouchableOpacity
            onPress={() =>
                setIconosSeleccionados({
                ...iconosSeleccionados,
                icono3: !iconosSeleccionados.icono3,
                })
            }
            style={{
                width: "50%",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderColor: iconosSeleccionados.icono3 ? "blue" : "transparent",
                backgroundColor: iconosSeleccionados.icono3 ? "lightblue" : "transparent",
            }}
            >
            <Icon name="home" size={40} />
            <Text>Casa</Text>
            </TouchableOpacity>
            {/* Icono 4 */}
            <TouchableOpacity
            onPress={() =>
                setIconosSeleccionados({
                ...iconosSeleccionados,
                icono4: !iconosSeleccionados.icono4,
                })
            }
            style={{
                width: "50%",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderColor: iconosSeleccionados.icono4 ? "blue" : "transparent",
                backgroundColor: iconosSeleccionados.icono4 ? "yellow" : "transparent",
            }}
            >
            <Icon name="graduation-cap" size={40} />
            <Text>Eduacion</Text>
            </TouchableOpacity>

            <View style={styles.comentarioContainer}>
                <Text style={styles.titulo}>Comentario</Text>
                <TextInput
                placeholder="comentario"
                value={comentario}
                onChangeText={(text) => setComentario(text)}
                style={styles.inputComentario}
                />
            </View>
            <View style={styles.botonContainer}>
                <Button title="Añadir"/>
            </View>
        </View>
        

  {/* Aquí puedes agregar los elementos y la lógica para agregar una nueva transacción */}
</View>

  );
};

export default AñadirTransaccionScreen;