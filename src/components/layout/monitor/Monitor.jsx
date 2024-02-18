import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import CircularChart from 'src/components/ui/CircularChart';
import LineChart from 'src/components/ui/LineChart';
import SemicircleGauge from 'src/components/ui/SemicircleGauge';
import ShipTable from 'src/components/ui/ShipTable';
import getAllMonitorings from 'src/utils/getAllMonitorings';

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
  )
};

export default Monitor;
