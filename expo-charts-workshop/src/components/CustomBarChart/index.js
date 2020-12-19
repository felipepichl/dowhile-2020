import React from 'react';
import { BarChart } from 'react-native-svg-charts';

function CustomBarChart({ charData }) {
  return <BarChart data={charData} style={{ height: 200, borderWidth: 1 }} />;
}

export default CustomBarChart;
