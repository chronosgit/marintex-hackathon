import ReactApexChart from 'react-apexcharts';

const SemicircleGauge = ({title = "Pie", fraction}) => {
	const series = [fraction];

	const options = {
		plotOptions: {
			radialBar: {
				hollow: {
					margin: 0,
					size: "60%",
					background: "#ebf3fb"
				},
				track: {
					dropShadow: {
						enabled: true,
						top: 2,
						left: 0,
						blur: 4,
						opacity: 0.15
					}
				},
				dataLabels: {
					name: {
						offsetY: -20,
						color: "black",
						fontSize: "0.8rem"
					},
					value: {
						color: "black",
						fontSize: "1rem",
						show: true
					}
				}
			}
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: "dark",
				type: "vertical",
				gradientToColors: ["#87D4F9"],
				stops: [0, 100]
			}
		},
		stroke: {
			lineCap: "round"
		},
		labels: [title]
	};

	return (
		<ReactApexChart options={options} series={series} type="radialBar" height={300} />
	);
};

export default SemicircleGauge;
