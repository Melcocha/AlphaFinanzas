import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const AADIRGASTOS = () => {
  return (
    <View style={styles.aadirGastos}>
      <View style={[styles.tituloSuperior, styles.tituloLayout]}>
        <View
          style={[styles.tituloInicioDeSesion, styles.aadirGastosChildBg]}
        />
        <Text style={[styles.aadirTransacciones, styles.gastosTypo]}>
          Añadir Transacciones
        </Text>
        <Image
          style={styles.rightArrow1Icon}
          contentFit="cover"
          source={require("../assets/rightarrow-1.png")}
        />
      </View>
      <View style={[styles.datosPrincipales, styles.datosPosition]}>
        <Image
          style={[styles.datosPrincipalesChild, styles.datosPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-2.png")}
        />
        <View style={styles.gastcost}>
          <Text style={[styles.ingresos, styles.usdTypo]}>INGRESO</Text>
          <Text style={[styles.gastos, styles.gastosTypo]}>GASTOS</Text>
          <Text style={[styles.text, styles.textTypo]}>0</Text>
          <Text style={[styles.usd, styles.usdTypo]}>USD</Text>
          <View style={styles.gastcostChild} />
        </View>
      </View>
      <View style={[styles.grafico, styles.graficoLayout]}>
        <View style={[styles.cntenedorCategorias, styles.diaShadowBox]} />
        <View style={[styles.categerias, styles.categeriasPosition]}>
          <Image
            style={[styles.healthyFood1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/healthyfood-1.png")}
          />
          <Image
            style={[styles.interrogationMark1Icon, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/interrogationmark-1.png")}
          />
          <Image
            style={[styles.coffee1Icon, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/coffee-1.png")}
          />
          <Image
            style={[styles.home1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/home-1.png")}
          />
          <Image
            style={[styles.wallet1Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/wallet-1.png")}
          />
          <Text style={[styles.cuenta, styles.aadirClr]}>Cuenta</Text>
          <Text style={[styles.categoras, styles.aadirClr]}>Categorías</Text>
          <Text style={[styles.salud, styles.cafTypo]}>Salud</Text>
          <Text style={[styles.educacin, styles.otrosTypo]}>Educación</Text>
          <Text style={[styles.comentario, styles.comentarioIconPosition]}>
            Comentario
          </Text>
          <Text style={[styles.comentario1, styles.comentarioIconPosition]}>
            Comentario
          </Text>
          <Text style={[styles.regalos, styles.otrosTypo]}>Regalos</Text>
          <Text style={[styles.alimentacin, styles.otrosTypo]}>
            Alimentación
          </Text>
          <Text style={[styles.ocio, styles.cafTypo]}>Ocio</Text>
          <Text style={[styles.otros, styles.otrosTypo]}>Otros</Text>
          <Text style={[styles.casa, styles.cafTypo]}>Casa</Text>
          <Text style={[styles.caf, styles.cafTypo]}>Café</Text>
          <Text style={[styles.principal, styles.aadirClr]}>Principal</Text>
          <Image
            style={[styles.heart1Icon, styles.comentarioIconPosition]}
            contentFit="cover"
            source={require("../assets/heart-1.png")}
          />
          <Image
            style={[styles.mortarboard1Icon, styles.comentarioIconPosition]}
            contentFit="cover"
            source={require("../assets/mortarboard-1.png")}
          />
          <Image
            style={[styles.giftBox1Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/giftbox-1.png")}
          />
          <View style={styles.categeriasChild} />
        </View>
      </View>
      <View style={[styles.aadirGastosChild, styles.aadirGastosChildBg]} />
      <View style={[styles.btnContinuar, styles.btnLayout]}>
        <Image
          style={[styles.btnContinuarIcon, styles.btnLayout]}
          contentFit="cover"
          source={require("../assets/btn-continuar.png")}
        />
        <Text style={[styles.aadir, styles.aadirClr]}>Añadir</Text>
      </View>
      <View style={[styles.fecha, styles.diaLayout]}>
        <View style={[styles.dia, styles.diaLayout]} />
        <Text style={[styles.text1, styles.text1Typo]}>07</Text>
        <Text style={[styles.domingo, styles.text1Typo]}>Domingo</Text>
        <Text style={[styles.sep2023, styles.aadirClr]}>Sep. 2023</Text>
        <Image
          style={[styles.rightArrow11, styles.categeriasPosition]}
          contentFit="cover"
          source={require("../assets/rightarrow-1-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tituloLayout: {
    height: 55,
    width: 360,
    left: 0,
    top: 0,
  },
  aadirGastosChildBg: {
    backgroundColor: Color.colorDarkslategray,
    position: "absolute",
  },
  gastosTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  datosPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  usdTypo: {
    color: Color.colorDarkslategray,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorGray,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  graficoLayout: {
    height: 368,
    width: 335,
    position: "absolute",
  },
  diaShadowBox: {
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderStyle: "solid",
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
  },
  categeriasPosition: {
    top: 23,
    position: "absolute",
  },
  iconLayout: {
    width: 55,
    height: 55,
  },
  iconPosition1: {
    left: 259,
    width: 55,
    height: 55,
    position: "absolute",
  },
  iconPosition: {
    left: 89,
    width: 55,
    height: 55,
    position: "absolute",
  },
  aadirClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  cafTypo: {
    top: 146,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  otrosTypo: {
    top: 242,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  comentarioIconPosition: {
    left: 4,
    position: "absolute",
  },
  btnLayout: {
    height: 46,
    width: 276,
    position: "absolute",
  },
  diaLayout: {
    height: 57,
    width: 335,
    position: "absolute",
  },
  text1Typo: {
    top: 14,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  tituloInicioDeSesion: {
    height: 55,
    width: 360,
    left: 0,
    top: 0,
  },
  aadirTransacciones: {
    left: 56,
    color: Color.colorWhite,
    top: 16,
  },
  rightArrow1Icon: {
    left: 16,
    width: 24,
    height: 24,
    top: 16,
    position: "absolute",
  },
  tituloSuperior: {
    position: "absolute",
  },
  datosPrincipalesChild: {
    top: -4,
    height: 127,
  },
  ingresos: {
    left: 0,
    top: 0,
  },
  gastos: {
    left: 196,
    color: Color.colorGoldenrod,
    top: 0,
  },
  text: {
    left: 137,
    fontSize: FontSize.size_5xl,
    top: 47,
    position: "absolute",
  },
  usd: {
    top: 52,
    left: 191,
  },
  gastcostChild: {
    top: 24,
    backgroundColor: Color.colorGoldenrod,
    width: 104,
    height: 2,
    left: 186,
    position: "absolute",
  },
  gastcost: {
    top: 18,
    left: 33,
    width: 290,
    height: 76,
    position: "absolute",
  },
  datosPrincipales: {
    top: 55,
    height: 119,
  },
  cntenedorCategorias: {
    height: 368,
    width: 335,
    position: "absolute",
  },
  healthyFood1Icon: {
    left: 174,
    width: 55,
    position: "absolute",
    top: 184,
  },
  interrogationMark1Icon: {
    top: 184,
  },
  coffee1Icon: {
    top: 88,
  },
  home1Icon: {
    top: 88,
    left: 174,
    width: 55,
    position: "absolute",
  },
  wallet1Icon: {
    top: 88,
  },
  cuenta: {
    fontSize: FontSize.size_sm,
    left: 11,
    color: Color.colorBlack,
    position: "absolute",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 0,
  },
  categoras: {
    fontSize: FontSize.size_sm,
    left: 11,
    color: Color.colorBlack,
    position: "absolute",
    top: 47,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  salud: {
    left: 12,
    fontSize: FontSize.size_xs,
  },
  educacin: {
    left: 0,
  },
  comentario: {
    top: 283,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  comentario1: {
    top: 305,
    fontSize: 10,
    color: Color.colorGray,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  regalos: {
    left: 93,
  },
  alimentacin: {
    left: 162,
  },
  ocio: {
    left: 102,
    fontSize: FontSize.size_xs,
  },
  otros: {
    left: 270,
  },
  casa: {
    fontSize: FontSize.size_xs,
    left: 186,
    top: 146,
  },
  caf: {
    left: 272,
    fontSize: FontSize.size_xs,
  },
  principal: {
    top: 19,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    left: 11,
    color: Color.colorBlack,
    position: "absolute",
  },
  heart1Icon: {
    top: 88,
    width: 55,
    height: 55,
  },
  mortarboard1Icon: {
    width: 55,
    height: 55,
    top: 184,
  },
  giftBox1Icon: {
    top: 184,
  },
  categeriasChild: {
    top: 321,
    left: 3,
    borderColor: Color.colorBlack,
    borderTopWidth: 2,
    width: 312,
    borderStyle: "solid",
    height: 2,
    position: "absolute",
  },
  categerias: {
    left: 8,
    width: 314,
    height: 322,
  },
  grafico: {
    top: 193,
    left: 13,
  },
  aadirGastosChild: {
    top: 151,
    left: 134,
    width: 93,
    height: 3,
  },
  btnContinuarIcon: {
    borderRadius: 5,
    left: 0,
    top: 0,
  },
  aadir: {
    top: 12,
    left: 113,
    fontSize: 16,
    fontFamily: FontFamily.manropeRegular,
    width: 50,
    height: 22,
    position: "absolute",
  },
  btnContinuar: {
    top: 684,
    left: 42,
  },
  dia: {
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderStyle: "solid",
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
  },
  text1: {
    left: 13,
    fontSize: FontSize.size_5xl,
  },
  domingo: {
    left: 52,
    fontSize: FontSize.size_xs,
  },
  sep2023: {
    top: 30,
    left: 51,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  rightArrow11: {
    left: 306,
    width: 12,
    height: 12,
  },
  fecha: {
    top: 580,
    left: 13,
  },
  aadirGastos: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
  },
});

export default AADIRGASTOS;
