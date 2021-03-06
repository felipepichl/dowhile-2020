import React from 'react';
import { ActivityIndicator } from 'react-native';
import { BarChart } from 'react-native-svg-charts';

function CustomBarChart({ chartData, chartDimension }) {
  return chartDimension ? (
    <BarChart
      data={chartData}
      svg={{
        fill: 'rgba(175, 220, 139, 0.7)',
      }}
      yMin={0}
      spacingInner={0.25}
      yAccessor={({ item }) => item.value}
      style={{
        borderRadius: 8,
        height: chartDimension.height,
        width: chartDimension.width,
      }}
    />
  ) : (
    <ActivityIndicator size="small" color="#2b2b73" />
  );
}

export default CustomBarChart;
