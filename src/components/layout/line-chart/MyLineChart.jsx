import ReactApexChart from "react-apexcharts";

const MyLineChart = ({
    title = "Line", 
    values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], 
    height = 200
}) => {

    const series = [
        {
            name: title,
            data: values,
        },
    ];
  
    const options = {
        chart: {
            height: height,
            type: 'line',
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
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