import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import firestore from "@react-native-firebase/firestore";

const CategoriaGastosScreen = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [catgastos, setCatgastos] = useState([]); // Initial empty array of users

  useEffect(() => {
    const subscriber = firestore()
      .collection("CATgastos")
      .onSnapshot((querySnapshot) => {
        const catgastos = [];

        querySnapshot.forEach((documentSnapshot) => {
          catgastos.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setCatgastos(catgastos);
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  console.log(catgastos);

  return (
    <>
      <View style={styles.CatIngScreen}>
        <View style={styles.menuSupCat}>
          <View style={styles.botonesCat}>
            <TouchableOpacity
              onPress={() => navigation.navigate("CategoriaIngresos")}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                }}
              >
                INGRESOS
              </Text>
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
        <View style={styles.categorias}>
          <View style={{ paddingLeft: 10, paddingTop: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>Categorias:</Text>
          </View>
          <FlatList
            data={catgastos}
            renderItem={({ item }) => (
              <>
                <View style={styles.contenedorcateg}>
                  <View style={styles.conttextos}>
                    <Image
                      style={styles.image}
                      contentFit="cover"
                      source={{ uri: item.salud }}
                    />
                    <Text style={styles.textos}>Salud</Text>
                  </View>
                  <View style={styles.conttextos}>
                    <Image
                      style={styles.image}
                      contentFit="cover"
                      source={{ uri: item.ocio }}
                    />
                    <Text style={styles.textos}>Ocio</Text>
                  </View>
                  <View style={styles.conttextos}>
                    <Image
                      style={styles.image}
                      contentFit="cover"
                      source={{ uri: item.casa }}
                    />
                    <Text style={styles.textos}>Casa</Text>
                  </View>
                  <View style={styles.conttextos}>
                    <Image
                      style={styles.image}
                      contentFit="cover"
                      source={{ uri: item.cafe }}
                    />
                    <Text style={styles.textos}>Café</Text>
                  </View>
                </View>
                <View style={styles.contenedorcateg}>
                  <View style={styles.conttextos}>
                    <Image
                      style={styles.image}
                      contentFit="cover"
                      source={require("../assets/mortarboardCAT.png")}
                    />
                    <Text style={styles.textos}>Educación</Text>
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
                      source={require("../assets/healthy-foodCAT.png")}
                    />
                    <Text style={styles.textos}>Alimentación</Text>
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
              </>
            )}
          />
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
    borderColor: "#64748B",
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
    flex: 8,
    backgroundColor: "#fff",
    borderRadius: 15,
    margin: 8,
    borderWidth: 2,
    borderColor: "#64748B",
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

export default CategoriaGastosScreen;
