import { useEffect } from 'react';
import CircularChart from 'src/components/ui/CircularChart';
import LineChart from 'src/components/ui/LineChart';
import SemicircleGauge from 'src/components/ui/SemicircleGauge';
import ShipTable from 'src/components/ui/ShipTable';
import { useState } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';

const series = [
    {
      name: 'Series 1',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ];
const getTop10DataPoints = () => series[0].data.slice(0, 10);
const list = getTop10DataPoints();

const ships = [
  { name: 'Ship 1', path: 'Path A', fuelAllPaths: 500, fuelPerHour: 50 },
  { name: 'Ship 2', path: 'Path B', fuelAllPaths: 700, fuelPerHour: 60 },
  // Add more ships as needed
];

const Monitor = () => {
    const [selectedData, setSelectedData] = useState(list[0]);

    const handleRowClick = (rank, ship) => {
        // Handle the click event, e.g., set the selected data for LineChart
        setSelectedData({ rank, ship });
    };

    useEffect(() => {
      // Function to fetch data
      const fetchData = async () => {
        try {
          // console.log(localStorage.getItem("access-token"));
          // const response = await axios.post('http://marintexhackathon-production.up.railway.app//api/v1/monitorings/1');
          const response = await axios.get(
            'https://marintexhackathon-production.up.railway.app/api/v1/monitorings/getAll',
            {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("access-token")}`,
                // Add any other headers as needed
              },
            }
          );
          // const result = await response.json();
          console.log(response.json());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
      return () => {
        console.log('Cleanup - Component will unmount');
      };
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
                <SemicircleGauge />
                <SemicircleGauge />
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
              <CircularChart />
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
