import React from 'react';
import { BarChart } from 'react-native-svg-charts';

function CustomBarChart({ chartData, chartDimension }) {
  return (
    <BarChart
      data={chartData}
      svg={{
        fill: 'rgba(175, 220, 139, 0.7)',
      }}
      style={{
        borderRadius: 8,
        height: chartDimension.height,
        width: chartDimension.width,
      }}
    />
  );
}

export default CustomBarChart;
