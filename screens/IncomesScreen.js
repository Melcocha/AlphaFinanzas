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
import AñadirTransaccionScreen from '../screens/AñadirTransaccionScreen';

const IncomesScreen = () => {
  const navigation = useNavigation();

  const navigateToAddTransaction = () => {
    navigation.navigate("AñadirTransaccion");
  };

  return (
    <>
      <SafeAreaView style={styles.fondo}>
        <SafeAreaView style={styles.topMenu}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 23,
                fontWeight: "bold",
                color: "#FFC436",
                textDecorationLine: "underline",
              }}
            >
              INGRESOS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Gastos")}>
            <Text style={styles.text}>GASTOS</Text>
          </TouchableOpacity>
        </SafeAreaView>

        <SafeAreaView style={styles.Container}>
          <TouchableOpacity style={styles.button2} onPress={navigateToAddTransaction}>
              <Text style={{ fontSize: 40, fontWeight: "bold" }}>+</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: "#BDBDD7",
  },
  topMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 45,
    backgroundColor: "#FFFFFF",
    height: 150,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomWidth: 1,
    borderColor: "#D7D7D7D7",
    shadowOpacity: 0.5,
    elevation: 3,
  },

  Container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    marginTop: -50,
    borderWidth: 1,
    borderColor: "#D7D7D7D7",
    shadowOpacity: 0.5,
    elevation: 3,
    alignItems: "center",
  },

  text: {
    fontSize: 23,
    fontWeight: "bold",
  },
  button2: {
    marginTop: 565,
    marginLeft: 295,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#FFC436",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default IncomesScreen;
