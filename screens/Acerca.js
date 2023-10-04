import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Image } from "react-native";

const AcercaScreen = () => {
  return (
    <>
      <View style={styles.AcercaScreen}>
        <View style={styles.ContenedorInfo}>
          <View style={styles.ContenedorIcono}>
            <Image
              style={styles.icono}
              source={require("../assets/icon.png")}
            />
          </View>
          <View style={styles.ContenedorTitulo}>
            <Text
              style={{ fontSize: 24, fontWeight: "bold", color: "#FFC436" }}
            >
              AlphaFinanzas
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "black" }}>
              Version 1.0.0
            </Text>
          </View>
          <View style={styles.ContenedorDesc}>
            <Text style={{ fontSize: 16, fontWeight: "500", color: "black", textAlign:"center"}}>
              Somos una nueva aplicación para gestionar tus finanzas personales,
              controlar tus gastos, ingresos y registrar todas tus
              transacciones.
            </Text>
          </View>
          <View style={styles.ContenedorUbi}>
            <Text style={{ fontSize: 15, fontWeight: "400", color: "black" }}>
              San Salvador - El Salvador, 2023.
            </Text>
          </View>
        </View>
        <View style={styles.ContenedorVacio}></View>
        <View style={styles.ContenedorDesarroladores}>
          <TouchableOpacity style={styles.btndev}>
            <AntDesign name="left" size={24} color={"black"} />
            <AntDesign name="right" size={24} color={"black"} />
            <Text style={{ fontSize: 25, fontWeight: "600" }}>
              Desarrollado por...
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  AcercaScreen: {
    flex: 1,
  },
  icono: {
    flex: 1,
    width: 140,
    height: 140,
    resizeMode: "contain",
    marginTop: 8,
  },
  ContenedorIcono: {
    flex: 4,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  ContenedorTitulo: {
    backgroundColor: "#fff",
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  ContenedorDesc: {
    flex: 2.5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft:15,
    paddingRight:15,
    resizeMode: "contain",
  },
  ContenedorUbi: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  ContenedorInfo: {
    flex: 3,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderWidth: 2,
    borderColor: "#a8a8a8",
    shadowOpacity: 1,
  },
  ContenedorVacio: {
    flex: 2
  },
  ContenedorDesarroladores: {
    flex: 0.8,
    backgroundColor: "#27374D",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  btndev: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 2,
    borderColor: "#a8a8a8",
    shadowOpacity: 1,
  },
});

export default AcercaScreen;
