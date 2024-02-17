// Example: src/CircularChart.js

import React from 'react';
import ReactApexChart from 'react-apexcharts';

const CircularChart = () => {
  // Sample data
  const series = [44, 55, 13, 43, 22];

  const options = {
    chart: {
      type: 'donut',
    },
    labels: ['Apple', 'Banana', 'Cherry', 'Date', 'Fig'],
  };

  return (
    <div>
      <ReactApexChart options={options} series={series} type="donut" />
    </div>
  );
};

export default CircularChart;
