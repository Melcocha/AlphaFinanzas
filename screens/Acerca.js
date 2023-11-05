import { useState } from "react";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Image } from "react-native";

const AcercaScreen = () => {
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar la visibilidad del primer modal

  // Función para mostrar el primer modal con el equipo de trabajo
  const showModal = () => {
    setModalVisible(true);
  };

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
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: "black",
                textAlign: "center",
              }}
            >
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
          <TouchableOpacity style={styles.btndev} onPress={() => showModal()}>
            <AntDesign name="left" size={24} color={"black"} />
            <AntDesign name="right" size={24} color={"black"} />
            <Text style={{ fontSize: 25, fontWeight: "600" }}>
              Desarrollado por...
            </Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTittle}> Integrantes: </Text>
              <Text style={styles.modalText}>
                -Kevin Alexis Ascencio Villagrán{" "}
              </Text>
              <Text style={styles.modalText}>
                -José Miguel Chávez Martínez{" "}
              </Text>
              <Text style={styles.modalText}>
                -Michael Steven Palacios Aguilar{" "}
              </Text>
              <Text style={styles.modalText}>-Raúl Alexander Lemus Girón </Text>
              <Text style={styles.modalText}>
                -Melvin Alexander Rodríguez Arteaga{" "}
              </Text>
              <Text style={styles.modalText}>
                -Andrés Eduardo Fernández Vásquez
              </Text>
              <View style={{alignItems:'center'}}>
                <TouchableOpacity
                  style={[styles.btnOk]}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text
                    style={{ color: "black", fontSize: 18, fontWeight: "bold" }}
                  >
                    OK
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
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
    paddingLeft: 15,
    paddingRight: 15,
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
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 2,
    borderColor: "#a8a8a8",
    shadowOpacity: 1,
  },
  ContenedorVacio: {
    flex: 2,
  },
  btndev: {
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 2,
    borderColor: "#a8a8a8",
    shadowOpacity: 1,
    height:70
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "justify",
    fontSize: 18,
    fontWeight: "500",
  },
  modalTittle: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  btnOk: {
    marginTop: 10,
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFC436",
    borderRadius: 5,

  },
});

export default AcercaScreen;
