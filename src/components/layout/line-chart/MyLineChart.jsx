import ReactApexChart from "react-apexcharts";
import getArythmeticArray from "src/utils/getArythmeticArray";

const MyLineChart = ({
    title = "Line", 
    value = 0, 
    height = 200
}) => {

    const series = [
        {
            name: title,
            data: getArythmeticArray(value, 12),
        },
    ];
  
    const options = {
        chart: {
            height: height,
            type: 'line',
        },
        xaxis: {
            categories: [
                '1 month', '2 month', 
                '3 month', '4 month', 
                '5 month', '6 month', 
                '7 monthul', '8 month', 
                '9 month', '10 month', 
                '11 month', '12 month',
            ],
        },
        stroke: {
            curve: 'smooth',
        },
    };

    return (
        <ReactApexChart options={options} series={series} type="line" height={height} />
    )
};

export default MyLineChart;