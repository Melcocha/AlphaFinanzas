import React from "react";
import { View, Text } from "react-native";
import { PieChart } from "react-native-svg-charts";

const Grafico = ({ totalGastos, totalcategorias }) => {
  console.log(totalcategorias);
  console.log((totalcategorias.Comida * 10) / totalGastos);
  console.log((totalcategorias.Regalos * 10) / totalGastos);
  console.log((totalcategorias.Educación * 10) / totalGastos);
  console.log((totalcategorias.Salud * 10) / totalGastos);
  console.log((totalcategorias.Ocio * 10) / totalGastos);
  console.log((totalcategorias.Casa * 10) / totalGastos);
  console.log((totalcategorias.Café * 10) / totalGastos);
  console.log((totalcategorias.Otros * 10) / totalGastos);

  const data = [
    {
      key: "Salud",
      value: (totalcategorias.Salud * 100) / totalGastos,
      svg: { fill: "#f55557" },
    },
    {
      key: "Comida",
      value: (totalcategorias.Comida * 100) / totalGastos,
      svg: { fill: "#b0dbff" },
    },
    {
      key: "Regalos",
      value: (totalcategorias.Regalos * 100) / totalGastos,
      svg: { fill: "#cecece" },
    },
    {
      key: "Educación",
      value: (totalcategorias.Educación * 100) / totalGastos,
      svg: { fill: "#ff55af" },
    },
    {
      key: "Ocio",
      value: (totalcategorias.Ocio * 100) / totalGastos,
      svg: { fill: "#52ff73" },
    },
    {
      key: "Casa",
      value: (totalcategorias.Casa * 100) / totalGastos,
      svg: { fill: "#52b3ff" },
    },
    {
      key: "Café",
      value: (totalcategorias.Café * 100) / totalGastos,
      svg: { fill: "#fff942" },
    },
    {
      key: "Otros",
      value: (totalcategorias.Otros * 100) / totalGastos,
      svg: { fill: "#c2aa54" },
    },
  ];
  return (
    <View
      style={{
        width: 300,
        height: 230,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PieChart
        style={{ height: 180, width: 600 }}
        data={data}
        innerRadius={50}
        innerRadiusRatio={1}
      />
      <Text
        style={{
          position: "absolute",
          top: 100,
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        ${totalGastos}
      </Text>
    </View>
  );
};

export default Grafico;
