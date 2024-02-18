import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import CircularChart from 'src/components/ui/CircularChart';
import LineChart from 'src/components/ui/LineChart';
import SemicircleGauge from 'src/components/ui/SemicircleGauge';
import ShipTable from 'src/components/ui/ShipTable';
import getAllMonitorings from 'src/utils/getAllMonitorings';
import getRenewableFraction from 'src/utils/getRenewableFraction';
import getFractionOfGuideline from 'src/utils/getFractionOfGuideline';
import { blue } from '@mui/material/colors';

const Monitor = () => {
	const [ships, setShips] = useState([]);
	const [selectedShip, setSelectedtShip] = useState({});

	const handleRowClick = (ship) => {
		setSelectedtShip(ship);
	};

	useEffect(() => {
		const fetchData = async () => {
			const result = await getAllMonitorings();
			setShips(result);
			setSelectedtShip(result[0]);
		}

		fetchData();
	}, []); 

	return (
		<div style={{ width: '80vw'}}>
				{selectedShip && 
				<>
					<h2>
						General Statistics and data of <span style={{color: blue[500]}}>
							{selectedShip && selectedShip.ship}
						</span>
					</h2>

					<Box sx={{
						display: "grid",
						gridTemplateColumns: "1.5fr 1fr",
						marginBottom: '2rem',
					}}>
						<Box sx={{
							display: 'grid',
							gridTemplateColumns: "1fr 1fr",
							boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
							backgroundColor: '#fff',
							borderRadius: '8px',
							marginBottom: '2rem',
						}}>
							<SemicircleGauge title="Renewable energy" fraction={getRenewableFraction(ships)} />
							<SemicircleGauge title="Current energy consumption" fraction={getFractionOfGuideline(selectedShip)} />
						</Box>

						<Box sx={{
							display: 'flex',
							alignItems: 'center',
							boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
							backgroundColor: '#fff',
							borderRadius: '8px',
							marginBottom: '2rem',
							marginLeft: '10px'
						}}>
							<CircularChart ships={ships} />
						</Box>

					</Box>

					<LineChart selectedShip={selectedShip} />
				</>
				}
				<ShipTable ships={ships} onRowClick={handleRowClick} />
		</div>
	);
};

export default Monitor;
