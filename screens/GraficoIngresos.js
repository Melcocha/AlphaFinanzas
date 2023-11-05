import React from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

const Grafico = ({totalIngresos, totalcategorias}) => {
console.log((totalcategorias));
console.log((totalcategorias.Intereses * 10) / totalIngresos);
console.log((totalcategorias.Regalos * 10) / totalIngresos);
console.log((totalcategorias.Otros * 10) / totalIngresos);
console.log((totalcategorias.Casa * 10) / totalIngresos);
console.log((totalcategorias.Salario * 10) / totalIngresos);

const data = [
  {
    key: 'Intereses',
    value: (totalcategorias.Intereses * 100) / totalIngresos,
    svg: { fill: '#0288D1' },
  },
  {
    key: 'Regalos',
    value: (totalcategorias.Regalos * 100) / totalIngresos,
    svg: { fill: '#808080' },
  },
  {
    key: 'Otros',
    value: (totalcategorias.Otros * 100) /totalIngresos,
    svg: { fill: '#aa6000' },
  },
  {
    key: 'Casa',
    value: (totalcategorias.Casa * 100) /totalIngresos,
    svg: { fill: '#29B6F6' },
  },
  {
    key: 'Salario',
    value: (totalcategorias.Salario * 100) /totalIngresos,
    svg: { fill: '#77DD77' },
  },
];
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
