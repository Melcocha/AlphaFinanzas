import React from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

const Grafico = ({totalIngresos, totalcategorias}) => {

let data;

if (totalIngresos != 0) {
  data = [
  {
    key: 'Intereses',
    value: (totalcategorias.Intereses * 100) / totalIngresos,
    svg: { fill: "#52b3ff" },
  },
  {
    key: 'Regalos',
    value: (totalcategorias.Regalos * 100) / totalIngresos,
    svg: { fill: "#cecece" },
  },
  {
    key: 'Otros',
    value: (totalcategorias.Otros * 100) /totalIngresos,
    svg: { fill: "#c2aa54" },
  },
  {
    key: 'Salario',
    value: (totalcategorias.Salario * 100) /totalIngresos,
    svg: { fill: "#52ff73" },
  },
];
} else {
  data = [
    {
      key: 'Vacio',
      value: 100,
      svg: { fill: '#B9B4C7' },
    },
  ]
}
    return (
    <View style={{width: 300, height: 230, alignItems: 'center', justifyContent: 'center'}}>
        <PieChart
          style={{ height: 180, width: 600 }}
          data={data}
          innerRadius={50}
          innerRadiusRatio={1}
        />
        <Text style={{ position: 'absolute', top: 100, textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>
        ${totalIngresos}
        </Text>
      </View>
    );
  };

export default Grafico;
