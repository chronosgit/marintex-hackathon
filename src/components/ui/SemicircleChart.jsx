// Example: src/SemicircleChart.js

import React from 'react';
import ReactApexChart from 'react-apexcharts';

const SemicircleChart = () => {
  // Sample data
  const series = [44, 55, 13, 43, 22];

  const options = {
    chart: {
      type: 'pie',
      height: 350,
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 30,
      },
    },
    labels: ['Apple', 'Banana', 'Cherry', 'Date', 'Fig'],
  };

  return (
    <div>
      <ReactApexChart options={options} series={series} type="pie" height={350} />
    </div>
  );
};

export default SemicircleChart;
