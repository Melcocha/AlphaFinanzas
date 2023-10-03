import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import { Image } from "react-native";

const IncomesScreen = () => {
  const navigation = useNavigation();

  const navigateToAddTransaction = () => {
    navigation.navigate("AñadirTransaccion");
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
            <Text style={styles.selectorfechatxt}>Total:100</Text>
          </View>
          <ScrollView style={styles.scrollcont}>
            <View>
              <Text style={{ paddingLeft: 10 }}>02 de octubre de 2023</Text>
            </View>
            <View style={styles.lista}>
              <View>
                <Image
                  contentFit="cover"
                  source={require("../assets/heart-1.png")}
                />
              </View>
              <View style={{ paddingLeft: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: "700" }}>Salud</Text>
                <Text>Compra de medicina</Text>
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
                    $50.00
                  </Text>
                  <Text>Principal</Text>
                </View>
              </View>
            </View>
            <View style={styles.lista}>
              <View>
                <Image
                  contentFit="cover"
                  source={require("../assets/heart-1.png")}
                />
              </View>
              <View style={{ paddingLeft: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: "700" }}>Salud</Text>
                <Text>Compra de medicina</Text>
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
                    $50.00
                  </Text>
                  <Text>Principal</Text>
                </View>
              </View>
            </View>
            <View style={styles.lista}>
              <View>
                <Image
                  contentFit="cover"
                  source={require("../assets/heart-1.png")}
                />
              </View>
              <View style={{ paddingLeft: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: "700" }}>Salud</Text>
                <Text>Compra de medicina</Text>
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
                    $50.00
                  </Text>
                  <Text>Principal</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={{ paddingLeft: 10 }}>05 de octubre de 2023</Text>
            </View>
            <View style={styles.lista}>
              <View>
                <Image
                  contentFit="cover"
                  source={require("../assets/heart-1.png")}
                />
              </View>
              <View style={{ paddingLeft: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: "700" }}>Salud</Text>
                <Text>Compra de medicina</Text>
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
                    $50.00
                  </Text>
                  <Text>Principal</Text>
                </View>
              </View>
            </View>
            <View style={styles.lista}>
              <View>
                <Image
                  contentFit="cover"
                  source={require("../assets/heart-1.png")}
                />
              </View>
              <View style={{ paddingLeft: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: "700" }}>Salud</Text>
                <Text>Compra de medicina</Text>
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
                    $50.00
                  </Text>
                  <Text>Principal</Text>
                </View>
              </View>
            </View>
            <View style={styles.lista}>
              <View>
                <Image
                  contentFit="cover"
                  source={require("../assets/heart-1.png")}
                />
              </View>
              <View style={{ paddingLeft: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: "700" }}>Salud</Text>
                <Text>Compra de medicina</Text>
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
                    $50.00
                  </Text>
                  <Text>Principal</Text>
                </View>
              </View>
            </View>
            <View style={styles.lista}>
              <View>
                <Image
                  contentFit="cover"
                  source={require("../assets/heart-1.png")}
                />
              </View>
              <View style={{ paddingLeft: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: "700" }}>Salud</Text>
                <Text>Compra de medicina</Text>
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
                    $50.00
                  </Text>
                  <Text>Principal</Text>
                </View>
              </View>
            </View>
            <View style={styles.lista}>
              <View>
                <Image
                  contentFit="cover"
                  source={require("../assets/heart-1.png")}
                />
              </View>
              <View style={{ paddingLeft: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: "700" }}>Salud</Text>
                <Text>Compra de medicina</Text>
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
                    $50.00
                  </Text>
                  <Text>Principal</Text>
                </View>
              </View>
            </View>
            <View style={styles.lista}>
              <View>
                <Image
                  contentFit="cover"
                  source={require("../assets/heart-1.png")}
                />
              </View>
              <View style={{ paddingLeft: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: "700" }}>Salud</Text>
                <Text>Compra de medicina</Text>
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
                    $50.00
                  </Text>
                  <Text>Principal</Text>
                </View>
              </View>
            </View>
            <View style={styles.lista}>
              <View>
                <Image
                  contentFit="cover"
                  source={require("../assets/heart-1.png")}
                />
              </View>
              <View style={{ paddingLeft: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: "700" }}>Salud</Text>
                <Text>Compra de medicina</Text>
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
                    $50.00
                  </Text>
                  <Text>Principal</Text>
                </View>
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.btnAdd}>
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
    borderColor: "#a8a8a8",
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
    paddingTop: 10, //arrecla el espacio para el telefono grande kevin
  },
  lista: {
    flex: 1,
    flexDirection: "row",
    height: 80,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginLeft: 6,
    marginRight: 6,
    marginTop: 6,
    alignItems: "center",
    alignContent: "space-between",
    padding: 10,
    borderWidth: 2,
    borderColor: "#a8a8a8",
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
    borderColor: "#a8a8a8",
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
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#FFC436",
    position: "absolute",
    right: 0,
    bottom: 0,
    marginRight: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default IncomesScreen;
