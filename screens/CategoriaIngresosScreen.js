import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";

const CategoriaIngresosScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.CatIngScreen}>
        <View style={styles.menuSupCat}>
          <View style={styles.botonesCat}>
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
            <TouchableOpacity
              onPress={() => navigation.navigate("CategoriaGastos")}
            >
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
        </View>
        <View style={styles.categorias}>
        <View style={{paddingLeft:10, paddingTop:20}}>
              <Text style={{fontSize:18,fontWeight:'700'}}>Categorias:</Text>
            </View>
          <View style={styles.contenedorcateg}>
            <View style={styles.conttextos}>
              <Image
                style={styles.image}
                contentFit="cover"
                source={require("../assets/salarioCAT.png")}
              />
              <Text style={styles.textos}>Salarios</Text>
            </View>
            <View style={styles.conttextos}>
              <Image
                style={styles.image}
                contentFit="cover"
                source={require("../assets/giftboxCAT.png")}
              />
              <Text style={styles.textos}>Regalos</Text>
            </View>
            <View style={styles.conttextos}>
              <Image
                style={styles.image}
                contentFit="cover"
                source={require("../assets/bankCAT.png")}
              />
              <Text style={styles.textos}>Interes</Text>
            </View>
            <View style={styles.conttextos}>
              <Image
                style={styles.image}
                contentFit="cover"
                source={require("../assets/interrogationmarkCAT.png")}
              />
              <Text style={styles.textos}>Otros</Text>
            </View>
          </View>
          <View style={styles.textos}></View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  CatIngScreen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  menuSupCat: {
    flex: 1,
    backgroundColor: "#fff",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderWidth: 2,
    borderColor: "#a8a8a8",
    shadowOpacity: 1,
  },
  botonesCat: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 35,
    paddingRight: 35,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  categorias: {
    flex: 6,
    backgroundColor: "#fff",
    borderRadius: 15,
    margin: 8,
    borderWidth: 2,
    borderColor: "#a8a8a8",
    shadowOpacity: 1,
  },
  contenedorcateg: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  image: {
    height: 60,
    width: 60,
  },
  conttextos: {
    alignItems: "center",
  },
  textos: {
    fontSize: 15,
    fontWeight: "700",
  },
});

export default CategoriaIngresosScreen;
