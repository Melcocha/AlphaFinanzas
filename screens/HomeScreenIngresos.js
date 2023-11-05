import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

//HomeScreenIngresos

import Grafico from "./GraficoIngresos";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Image } from "react-native";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [categoriaTotales, setCategoriasTotales] = useState({
    Salario: 0,
    Regalos: 0,
    Intereses: 0,
    Otros: 0,
    Casa: 0,
  });
  const [totalIngresos, setTotalIngresos] = useState(0);
  const [loading, setLoading] = useState(true); // Activar la carga en el montaje de componentes
  const [ingresos, setIngresos] = useState([]); // Matriz inicial vacía de ingresos
  const user = auth().currentUser;
  const uid = user.uid;

  useEffect(() => {
    let isMounted = true;
    const subscriber = firestore()
      .collection("Ingresos")
      .where("userId", "==", uid)
      .onSnapshot((querySnapshot) => {
        const ingresos = [];
        let newTotalIngresos = 0;
        const newCategoriaTotrales ={
          Salario: 0,
          Regalos: 0,
          Intereses: 0,
          Otros: 0,
          Casa: 0,
        }

        querySnapshot.forEach((documentSnapshot) => {
          //Cuenta valores de ingresos
          const ingresosData = documentSnapshot.data();
          const ingresoValor = ingresosData.valor || 0;
          newTotalIngresos += ingresoValor;
          
          const categoria = ingresosData.categoria;
          newCategoriaTotrales[categoria] += ingresoValor;

          ingresos.push({
            ...ingresosData,
            key: documentSnapshot.id,
          });
        });

        if (isMounted) {
        setTotalIngresos(newTotalIngresos);
        setCategoriasTotales(newCategoriaTotrales);
        setIngresos(ingresos);
        setLoading(false);
        }

        //Comprobando
        console.log("Total de ingresos:", totalIngresos);
        console.log("Total", categoriaTotales);
        
      });
    // Cancelar la suscripción a eventos cuando ya no se utilicensdsds
    return () => {
      isMounted = false;
      subscriber();
    }
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

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
              <FontAwesome5 name="history" size={28} color={"#27374D"} onPress={() => navigation.navigate("Ingresos")}/>
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
            <TouchableOpacity onPress={() => navigation.navigate("HomeGastos")}>
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
          <View style={{ flex: 1, alignItems: "center" }}>
            <Grafico totalIngresos={totalIngresos} totalcategorias={categoriaTotales} />

          </View>
          <TouchableOpacity
            style={styles.btnAdd}
            onPress={() => navigation.navigate("AñadirIngresos")}
          >
            <Text style={{ fontSize: 25 }}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contenedorInf2}>
          {totalIngresos !== 0 ? (
            <FlatList
              data={ingresos}
              renderItem={({ item }) => (
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
              )}
            />
          ) : (
            <View style={styles.lista}>
              <View>
                <Image
                  contentFit="cover"
                  style={{ width: 50, height: 50 }}
                />
              </View>
              <View style={styles.NoMov}>
                <Text style={{ fontSize: 16, fontWeight: "700" }}>
                  Sin Ingresos
                </Text>
                <Text>No se han realizado ingresos</Text>
              </View>
            </View>
          )}
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
    borderColor: "#64748B",
    shadowOpacity: 1,
  },
  texto: {
    fontSize: 24,
    fontWeight: "bold",
  },
  contenedorInf: {
    flex: 2.5,
    backgroundColor: "#fff",
    borderRadius: 15,
    margin: 8,
    borderWidth: 2,
    borderColor: "#64748B",
    shadowOpacity: 1,
  },
  contenedorInf2: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flex: 2,
    marginHorizontal: 8,
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
    marginTop: 0,
    marginBottom: 8,
  },
  btnAdd: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFC436",
    position: "absolute",
    right: 0,
    bottom: 0,
    marginRight: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  NoMov: {
    alignItems: "center",
    marginLeft: 30,
  },
});

export default HomeScreen;
