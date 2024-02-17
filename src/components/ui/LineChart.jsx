// Example: src/LineChart.js

import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = ({ selectedData = {rank: 1, value: 1} }) => {

    const series2 = [
        {
          name: 'Selected Series',
          data: [selectedData.value, selectedData.value + 10, selectedData.value - 5],
        },
      ];
    const series = [
    {
        name: 'Series 1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
    ];

    const options = {
    chart: {
        height: 350,
        type: 'line',
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    stroke: {
        curve: 'smooth', // Set the curve type to 'smooth'
    },
    };

  return (
    <div>
        <p>Hello: {selectedData.rank}</p>
        <button onClick={()=> {console.log(selectedData)}}>Press</button>
        <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default LineChart;
