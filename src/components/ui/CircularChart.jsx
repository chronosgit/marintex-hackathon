// Example: src/CircularChart.js

import React, { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const CircularChart = ({series}) => {
  let newSeries = Object.values(series).slice(1, 4);

  useEffect(() => {
    console.log(series, newSeries);
  }, []); 

  const options = {
    chart: {
      type: 'donut',
    },
    labels: ['fuel', 'solar battery', 'electricity'],
  };

  return (
    <div>
      <ReactApexChart options={options} series={newSeries} type="donut" />
    </div>
  );
};

export default CircularChart;
