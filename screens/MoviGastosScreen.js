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
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/FontAwesome";

const MoviGastosScreen = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true); // Activar la carga en el montaje de componentes
  const [gastos, setGastos] = useState([]); // Matriz inicial vacía de gastos
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar la visibilidad del primer modal
  const [confirmVisible, setConfirmVisible] = useState(false); // Estado para controlar la visibilidad del segundo modal
  const [selectedItem, setSelectedItem] = useState(null); // Estado para guardar el elemento seleccionado
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startDatePickerVisible, setStartDatePickerVisible] = useState(false);
  const [endDatePickerVisible, setEndDatePickerVisible] = useState(false);
  const [filteredIngresos, setFilteredIngresos] = useState([]);
  const user = auth().currentUser;
  const uid = user.uid;
  const totalIngresos = gastos.reduce(
    (total, item) => total + parseFloat(item.valor),
    0
  );

  useEffect(() => {
    const subscriber = firestore()
      .collection("Gastos")
      .where("userId", "==", uid)
      .onSnapshot((querySnapshot) => {
        const gastos = [];

        querySnapshot.forEach((documentSnapshot) => {
          gastos.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setGastos(gastos);
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
        await firestore().collection("Gastos").doc(selectedItem.key).delete();
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

  const removefilterIngresos = () => {
    const subscriber = firestore()
      .collection("Gastos")
      .where("userId", "==", uid)

      .onSnapshot((querySnapshot) => {
        if (querySnapshot && !querySnapshot.empty) {
          const ingresos = [];
          console.log("se encontraron documentos");
          querySnapshot.forEach((documentSnapshot) => {
            ingresos.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id,
            });
          });

          setGastos(ingresos);
          setLoading(false);
        } else {
        }
      });

    return () => subscriber();
  };
  const filterIngresosByDate = () => {
    const formattedDateStart = `${startDate.getFullYear()}/${(
      startDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${startDate.getDate().toString().padStart(2, "0")}`;

    const formattedDateEnd = `${endDate.getFullYear()}/${(
      endDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${endDate.getDate().toString().padStart(2, "0")}`;
    const subscriber = firestore()
      .collection("Gastos")
      .where("userId", "==", uid)
      .where("fecha", ">=", formattedDateStart)
      .where("fecha", "<=", formattedDateEnd)
      .orderBy("fecha", "desc")

      .onSnapshot((querySnapshot) => {
        if (querySnapshot && !querySnapshot.empty) {
          const ingresos = [];
          console.log("se encontraron documentos");
          querySnapshot.forEach((documentSnapshot) => {
            ingresos.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id,
            });
          });

          setGastos(ingresos);
          setLoading(false);
        } else {
        }
      });

    return () => subscriber();
  };

  return (
    <>
      <View style={styles.ingresos}>
        <View style={styles.menuSup}>
          <View style={styles.opciones}>
            <TouchableOpacity style={styles.btnCuenta}>
              <FontAwesome5 name="comment-dollar" size={24} color={"#27374D"} />
              <Text style={{ fontSize: 22, fontWeight: "700" }}>Principal</Text>
              <AntDesign name="caretdown" size={18} color={"#27374D"} />
            </TouchableOpacity>
            <Text style={styles.selectorfechatxt}>Total: ${totalIngresos}</Text>
          </View>
          <View style={styles.BotonesP}>
            <TouchableOpacity onPress={() => navigation.navigate("Ingresos")}>
              <Text style={styles.texto}>INGRESOS</Text>
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
        </View>

        <View style={styles.contenedorInf}>
          <View style={styles.fechascont}>
            <TouchableOpacity onPress={() => setStartDatePickerVisible(true)} style={styles.btnFecha}>
              <Text style={styles.fechasetxt}>Fecha Inicial</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setEndDatePickerVisible(true)} style={styles.btnFecha}>
              <Text style={styles.fechasetxt}>Fecha Final</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.selectorfecha}>
            {startDatePickerVisible && (
              <DateTimePicker
                value={startDate}
                mode="date"
                display="calendar"
                onChange={(event, selectedDate) => {
                  if (selectedDate) {
                    setStartDate(selectedDate);
                  }
                  setStartDatePickerVisible(false);
                }}
              />
            )}
            {endDatePickerVisible && (
              <DateTimePicker
                value={endDate}
                mode="date"
                display="calendar"
                onChange={(event, selectedDate) => {
                  if (selectedDate) {
                    setEndDate(selectedDate);
                  }
                  setEndDatePickerVisible(false);
                }}
              />
            )}
            <TouchableOpacity onPress={filterIngresosByDate} style={styles.btnF}>
              <Text style={styles.btnFiltrar}>Filtrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={removefilterIngresos}>
              <Icon name="refresh" size={30} color="#900" />
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                paddingLeft: 10,
                paddingTop: 10,
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Transacciones:
            </Text>
          </View>
          <FlatList
            data={gastos}
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
                  ¿Qué quieres hacer con esta transacción?
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
            onPress={() => navigation.navigate("AñadirGastos")}
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
  btnFecha:{
    backgroundColor:'#FFC436',
    padding:5,
    borderRadius:5
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
    fontSize: 20,
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
    fontSize: 22,
    fontWeight: "700",
    textDecorationLine: "underline",
  },
  btnFiltrar: {
    fontSize: 22,
    fontWeight: "700",
    textDecorationLine: "underline",
    color: "#FFF"
  },
  btnF: {
    backgroundColor:'#27374D',
    paddingLeft:10,
    paddingRight:10,
    borderRadius:5
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

export default MoviGastosScreen;
