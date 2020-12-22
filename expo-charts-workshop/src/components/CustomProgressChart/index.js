import React from 'react';
import { ActivityIndicator } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';

function CustomProgressChart({ chartData, chartDimension }) {
  return chartDimension ? (
    <ProgressCircle
      progress={chartData}
      progressColor="rgba(175, 220, 139, 0.7)"
      backgroundColor="rgba(175, 220, 139, 0.1)"
      strokeWidth={10}
      style={{
        borderRadius: 8,
        height: 200,
        width: 200,
        // height: chartDimension.height,
        // width: chartDimension.width,
      }}
    />
  ) : (
    <ActivityIndicator size="small" color="#2b2b73" />
  );
}

export default CustomProgressChart;
