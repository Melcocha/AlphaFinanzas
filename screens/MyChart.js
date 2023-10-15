import React from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

const data = [
  {
    key: 'Manzanas',
    value: 5,
    svg: { fill: '#ffaa00' },
  },
  {
    key: 'Plátanos',
    value: 2,
    svg: { fill: '#dd5500' },
  },
  {
    key: 'Uvas',
    value: 4,
    svg: { fill: '#aabbcc' },
  },
];

const MyPieChart = () => {
    return (
    <View style={{width: 300, height: 230, alignItems: 'center', justifyContent: 'center'}}>
        <PieChart
          style={{ height: 180, width: 600 }}
          data={data}
          innerRadius={50}
          innerRadiusRatio={1}
        />
        <Text style={{ position: 'absolute', top: 100, textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>
          100
        </Text>
      </View>
    );
  };

export default MyPieChart;
