import ReactApexChart from 'react-apexcharts';
import getEnergyPercantages from 'src/utils/getEnergyPercantages';

const CircularChart = ({ships = []}) => {
	let percentages = getEnergyPercantages(ships);

	const options = {
		chart: {
			type: 'donut',
		},
		labels: ['Fuel', 'Solar', 'Electricity'],
	};

	return (
		<ReactApexChart options={options} series={percentages} type="pie" />
	)
};

export default CircularChart;