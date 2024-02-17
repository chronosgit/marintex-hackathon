// Example: src/CircularChart.js

import React from 'react';
import ReactApexChart from 'react-apexcharts';
import CircularChart from 'src/components/ui/CircularChart';
import LineChart from 'src/components/ui/LineChart';
import SemicircleChart from 'src/components/ui/SemicircleChart';
import SemicircleGauge from 'src/components/ui/SemicircleGauge';
import TopTable from 'src/components/ui/TopTable';
import { useState } from 'react';

const series = [
    {
      name: 'Series 1',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ];
const getTop10DataPoints = () => series[0].data.slice(0, 10);

const Monitor = () => {
    const [selectedData, setSelectedData] = useState(null);

    const handleRowClick = (rank, value) => {
        // Handle the click event, e.g., set the selected data for LineChart
        alert(rank, value);
        setSelectedData({ rank, value });
    };

  return (
    <div style={{backgroundColor: 'pink', width: '50vw'}}>
        {selectedData && (
        <div>
            <h2>Line Chart for Selected Data</h2>
            <CircularChart />
            <SemicircleChart />
            <SemicircleGauge />
            <LineChart selectedData={selectedData} />
        </div>
        )}
        <TopTable dataPoints={getTop10DataPoints()} onRowClick={handleRowClick} />
    </div>
  );
};

export default Monitor;
