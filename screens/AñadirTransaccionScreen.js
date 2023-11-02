import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, Dimensions, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import firestore from '@react-native-firebase/firestore';

const windowWidth = Dimensions.get("window").width;


const AñadirTransaccionScreen = () => {
  const [monto, setMonto] = useState("");
  const [iconoSeleccionado, setIconoSeleccionado] = useState(null);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 20,
      backgroundColor: "#fff", // Cambia el color de fondo si lo deseas
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
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent:'center'
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
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    inputDolarContainer: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 20,
      paddingHorizontal: 15,
      fontSize: 18,
      marginTop: -15,
      alignSelf: "center",
      width: "110%",
      height: "15%"
    },
    categoriasContainer: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 20,
      padding: 10,
      marginTop: 20,
      marginBottom: 20,
    },

  });
  
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
    icono1: "Salud",
    icono2: "Ocio",
    icono3: "Casa",
    icono4: "Café",
    icono5: "Educación",
    icono6: "Regalos",
    icono7: "Alimentación",
    icono8: "Otros",
  };
  
  const [valor, setValor] = useState(''); // Estado para el valor
  const [comentario, setComentario] = useState(''); // Estado para el comentario

  const save = () => {
    if (iconoSeleccionado) {
      // Verifica si se ha seleccionado un ícono
      firestore().collection("Gastos").add({
        valor: valor,
        comentario: comentario,
        categoria: categorias[iconoSeleccionado] // Utiliza la categoría seleccionada
      });
    } else {
      // Si no se ha seleccionado un ícono, muestra una alerta
      Alert.alert("Error", "Debes seleccionar una categoría");
    }
  }
  const handleChangeText = (value, field) => {
    if (field === 'valor') {
      setValor(value);
    } else if (field === 'comentario') {
      setComentario(value);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputDolarContainer}>
        <TextInput
          placeholder='$'
          keyboardType="numeric"
          style={styles.inputDolar}
          onChangeText={(value)=>handleChangeText(value,'valor')}
         
        />
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
                  borderColor: iconoSeleccionado === iconName ? "blue" : "transparent",
                  backgroundColor: iconoSeleccionado === iconName ? "lightblue" : "transparent",
                },
              ]}
            >
              <View style={styles.icono}>
                <Icon name="heart-o" size={40} />
              </View>
              <Text style={styles.iconoTexto}>
                {categorias[iconName]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <Text style={styles.titulo}>Comentario</Text>

      <TextInput
        placeholder="Comentario"
        style={styles.inputComentario}
        onChangeText={(value)=>handleChangeText(value,'comentario')} 
      />

      <View style={styles.botonContainer}>
        <View style={styles.botonContainer}>
            <TouchableOpacity
          style={[styles.botonAñadir, { backgroundColor: '#FFC436', borderRadius: 10 }]}
          onPress={save}
        >
          <Text style={[styles.buttonText, { color: 'black' }]}>Añadir</Text>
        </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};
export default AñadirTransaccionScreen;
