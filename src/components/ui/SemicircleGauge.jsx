// Example: src/SemicircleGauge.js

import React from 'react';
import ReactApexChart from 'react-apexcharts';

const SemicircleGauge = () => {
  // Sample data
  const series = [75]; // Change this value to the speed you want to represent

  const options = {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          size: '70%',
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: 10,
            fontSize: '22px',
          },
        },
      },
    },
    labels: ['Speed'],
  };

  return (
    <div>
      <ReactApexChart options={options} series={series} type="radialBar" height={350} />
    </div>
  );
};

export default SemicircleGauge;
