// Example: src/CircularChart.js

import React, { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import CircularChart from 'src/components/ui/CircularChart';
import LineChart from 'src/components/ui/LineChart';
import SemicircleChart from 'src/components/ui/SemicircleChart';
import SemicircleGauge from 'src/components/ui/SemicircleGauge';
import ShipTable from 'src/components/ui/ShipTable';
import { useState } from 'react';
import { Box, Container } from '@mui/material';
import axios from 'axios';
import refreshToken from 'src/utils/refreshToken';
import getAllMonitorings from 'src/utils/getAllMonitorings';

const objectExample = {
  createdDate: "2024-02-17",
  electricity: 12.12,
  fuel: 123.1,
  id: 1,
  ship: "MIZZEN",
  solarBattery: 122.5,
}

// const series = [
//     {
//       name: 'Series 1',
//       data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
//     },
//   ];


// const ships = [
//   { name: 'Ship 1', path: 'Path A', fuelAllPaths: 500, fuelPerHour: 50 },
//   { name: 'Ship 2', path: 'Path B', fuelAllPaths: 700, fuelPerHour: 60 },
//   // Add more ships as needed
// ];

const Monitor = () => {
  const [ships, setShips] = useState([]);
  
  const [selectedData, setSelectedData] = useState(null);

  const handleRowClick = (rank, ship) => {
    // console.log(selectedData.ship)
    // console.log(typeof(ship.fuel))
    // console.log(ship)
      setSelectedData(ship);
  };

  useEffect(() => {
    const fetchData = async () => {
      // console.log(localStorage.getItem('access-token'));
      const result = await getAllMonitorings();
      setShips(result);
      // console.log(result[0]);
      setSelectedData(result[0]);
    }
    fetchData();
  }, []); 

  return (
    <div style={{ width: '80vw'}}>
        {selectedData && (
        <div>
            <h2>Line Chart for Selected Data</h2>
            <Box sx={{display: 'flex'}}>
            <Box sx={{
              display: 'flex',
              width: '70%',
              alignItems: 'center',
              padding: '16px',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#fff',
              borderRadius: '8px',
              marginBottom: '16px',
            }}>
                <SemicircleGauge coefficient={selectedData.fuel/200} />
                <SemicircleGauge coefficient={selectedData.electricity/200} />
            </Box>
            <Box sx={{
              display: 'flex',
              width: '30%',
              alignItems: 'center',
              padding: '16px',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#fff',
              borderRadius: '8px',
              marginBottom: '16px',
              marginLeft: '10px'
            }}>
              <CircularChart series={selectedData} />
            </Box>
            </Box>
            <LineChart selectedData={selectedData} />
        </div>
        )}
        <ShipTable ships={ships} onRowClick={handleRowClick} />
    </div>
  );
};

export default Monitor;
