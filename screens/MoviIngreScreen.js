import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Modal,
} from "react-native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

const MoviIngreScreen = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true); // Activar la carga en el montaje de componentes
  const [ingresos, setIngresos] = useState([]); // Matriz inicial vacía de ingresos
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar la visibilidad del primer modal
  const [confirmVisible, setConfirmVisible] = useState(false); // Estado para controlar la visibilidad del segundo modal
  const [selectedItem, setSelectedItem] = useState(null); // Estado para guardar el elemento seleccionado
  const user = auth().currentUser;
  const uid = user.uid;
  const totalIngresos = ingresos.reduce((total, item) => total + parseFloat(item.valor), 0);

  useEffect(() => {
    const subscriber = firestore()
      .collection("Ingresos")
      .where("userId", "==", uid)
      .onSnapshot((querySnapshot) => {
        const ingresos = [];

        querySnapshot.forEach((documentSnapshot) => {
          ingresos.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setIngresos(ingresos);
        setLoading(false);
      });

    // Cancelar la suscripción a eventos cuando ya no se utilicen
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  // Función para eliminar una transacción de Firestore
  const deleteTransaction = async () => {
    if (selectedItem) {
      try {
        await firestore().collection("Ingresos").doc(selectedItem.key).delete();
        console.log("Transacción eliminada");
        setConfirmVisible(false); // Cerrar el segundo modal
        setModalVisible(false); // Cerrar el primer modal
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  // Función para mostrar el primer modal con el elemento seleccionado
  const showModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  // Función para mostrar el segundo modal con la confirmación
  const showConfirm = () => {
    setConfirmVisible(true);
  };

  return (
    <>
      <View style={styles.ingresos}>
        <View style={styles.menuSup}>
          <View style={styles.opciones}>
            <TouchableOpacity style={styles.btnCuenta}>
              <FontAwesome5 name="comment-dollar" size={24} color={"#27374D"} />
              <Text style={{ fontSize: 25, fontWeight: "700" }}>Total</Text>
              <AntDesign name="caretdown" size={18} color={"#27374D"} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnBuscar}>
              <Fontisto name="search" size={28} color={"#27374D"} />
            </TouchableOpacity>
          </View>
          <View style={styles.BotonesP}>
            <TouchableOpacity>
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
            <TouchableOpacity onPress={() => navigation.navigate("Gastos")}>
              <Text style={styles.texto}>GASTOS</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.contenedorInf}>
          <View style={styles.fechascont}>
            <TouchableOpacity>
              <Text style={styles.fechasetxt}>Día</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.fechasetxtse}>Semana</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.fechasetxt}>Mes</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.fechasetxt}>Año</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.selectorfecha}>
            <TouchableOpacity>
              <Text style={styles.selectorfechatxt}>02 oct. - 08 oct.</Text>
            </TouchableOpacity>
            <Text style={styles.selectorfechatxt}>Total: ${totalIngresos}</Text>
          </View>
          <View>
            <Text style={{ paddingLeft: 10, paddingTop: 10 }}>
              Transacciones:
            </Text>
          </View>
          <FlatList
            data={ingresos}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => showModal(item)}>
                <View style={styles.lista}>
                  <View>
                    <Image
                      contentFit="cover"
                      source={{ uri: item.CatURL }}
                      style={{ width: 50, height: 50 }}
                    />
                  </View>
                  <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: "700" }}>
                      {item.categoria}
                    </Text>
                    <Text>{item.comentario}</Text>
                    <Text>{item.fecha}</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      width: "100%",
                      flexDirection: "row-reverse",
                    }}
                  >
                    <View>
                      <Text style={{ fontSize: 16, fontWeight: "700" }}>
                        ${item.valor}
                      </Text>
                      <Text>Principal</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
  
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
                <Text style={styles.modalText}>
                  {" "}
                  ¿Qué quieres hacer con esta transacción?{" "}
                </Text>
                <TouchableOpacity
                  style={[styles.btnDelete]}
                  onPress={showConfirm}
                >
                  <Text
                    style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}
                  >
                    Eliminar Transacción
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.btnCancel]}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text
                    style={{ color: "black", fontSize: 18, fontWeight: "bold" }}
                  >
                    CANCELAR
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={confirmVisible}
            onRequestClose={() => {
              setConfirmVisible(!confirmVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  {" "}
                  ¿Estás seguro de eliminar esta transacción?{" "}
                </Text>
                <TouchableOpacity
                  style={[styles.btnDelete]}
                  onPress={deleteTransaction}
                >
                  <Text
                    style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}
                  >
                    Sí
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.btnCancel]}
                  onPress={() => {
                    setConfirmVisible(!confirmVisible);
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text
                    style={{ color: "black", fontSize: 18, fontWeight: "bold" }}
                  >
                    No
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <TouchableOpacity
            style={styles.btnAdd}
            onPress={() => navigation.navigate("AñadirIngresos")}
          >
            <Text style={{ fontSize: 25 }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  ingresos: {
    flex: 1,
  },
  menuSup: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderWidth: 2,
    borderColor: "#64748B",
    shadowOpacity: 1,
  },
  opciones: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 35,
    paddingLeft: 35,
    paddingTop: 5,
  },
  btnCuenta: {
    alignItems: "baseline",
    flexDirection: "row",
  },
  btnBuscar: {
    flexDirection: "row",
  },
  BotonesP: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 45,
    paddingLeft: 45,
    marginBottom: 10,
    paddingTop: 10,
  },
  lista: {
    flex: 1,
    flexDirection: "row",
    height: 75,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginLeft: 6,
    marginRight: 6,
    marginTop: 6,
    alignItems: "center",
    alignContent: "space-between",
    padding: 10,
    borderWidth: 2,
    borderColor: "#64748B",
    shadowOpacity: 1,
  },
  texto: {
    fontSize: 24,
    fontWeight: "bold",
  },
  contenedorInf: {
    flex: 6,
    backgroundColor: "#fff",
    borderRadius: 15,
    margin: 8,
    borderWidth: 2,
    borderColor: "#64748B",
    shadowOpacity: 1,
  },
  fechascont: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingRight: 40,
    paddingLeft: 40,
    paddingTop: 10,
  },
  fechasetxt: {
    fontSize: 22,
    fontWeight: "500",
  },
  fechasetxtse: {
    fontSize: 22,
    fontWeight: "500",
    textDecorationLine: "underline",
    color: "#FFC436",
  },
  selectorfecha: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 15,
  },
  selectorfechatxt: {
    fontSize: 18,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
  scrollcont: {
    marginTop: 12,
    marginBottom: 8,
    backgroundColor: "#fff",
  },
  btnAdd: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFC436",
    position: "absolute",
    alignSelf: "center",
    bottom: 0,
    marginRight: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
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
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
  },
  btnDelete: {
    marginTop: 10,
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FC2947",
    borderRadius: 5,
    marginBottom: 20,
  },
  btnCancel: {
    marginTop: 10,
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFC436",
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default MoviIngreScreen;
