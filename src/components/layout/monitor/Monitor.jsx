// Example: src/CircularChart.js

import React from 'react';
import ReactApexChart from 'react-apexcharts';
import CircularChart from 'src/components/ui/CircularChart';
import LineChart from 'src/components/ui/LineChart';
import SemicircleChart from 'src/components/ui/SemicircleChart';
import SemicircleGauge from 'src/components/ui/SemicircleGauge';
import TopTable from 'src/components/ui/TopTable';
import { useState } from 'react';
import { Box } from '@mui/material';

const series = [
    {
      name: 'Series 1',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ];
const getTop10DataPoints = () => series[0].data.slice(0, 10);
const list = getTop10DataPoints();

const Monitor = () => {
    const [selectedData, setSelectedData] = useState(list[0]);

    const handleRowClick = (rank, value) => {
        // Handle the click event, e.g., set the selected data for LineChart
        setSelectedData({ rank, value });
    };

  return (
    <div style={{ width: '80vw'}}>
        {selectedData && (
        <div>
            <h2>Line Chart for Selected Data</h2>
            <Box sx={{width: '80%', display: 'flex'}}>
              <SemicircleChart />
              <SemicircleGauge />
            </Box>
            <Box>
              <CircularChart />
            </Box>
            <LineChart selectedData={selectedData} />
        </div>
        )}
        <TopTable dataPoints={getTop10DataPoints()} onRowClick={handleRowClick} />
    </div>
  );
};

export default Monitor;
