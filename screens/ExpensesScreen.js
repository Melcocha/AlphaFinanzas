import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import { NavigationAction } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const ExpensesScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.ingresos}>
        <View style={styles.menuSup}>
          <View style={styles.BotonesP}>
            <TouchableOpacity onPress={() => navigation.navigate("Ingresos")}>
              <Text style={styles.texto}>
                INGRESOS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity >
              <Text style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  color: "#FFC436",
                  textDecorationLine: "underline",
                }}>GASTOS</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.contenedorInf}>
          <TouchableOpacity style={styles.btnAdd}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  ingresos: {
    flex: 1,
    alignItems: "stretch",
  },
  menuSup: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#a8a8a8",
    shadowOpacity: 1,
  },
  BotonesP: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingRight: 45,
    paddingLeft: 45,
  },
  texto: {
    fontSize: 22,
    fontWeight: "bold",
  },
  contenedorInf: {
    flex: 4,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 15,
    marginTop: -50,
    margin: 10,
    borderWidth: 2,
    borderColor: "#a8a8a8",
    shadowOpacity: 1,
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

export default ExpensesScreen;