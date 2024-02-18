import { Box, Typography } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import getArythmeticArray from "src/utils/getArythmeticArray";

const MyLineChart = ({
    title = "Line", 
    start = 0,
    end = 360,
    value = 0, 
    height = 200
}) => {

    const dateDiff = end - start;
    const spanDays = new Date(dateDiff).getDate();
    const months = spanDays / 30;

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
        markers: {
            size: 3,
        },
        stroke: {
            curve: 'smooth',
        },
    };

    return (
        <Box>
        {
            months > 12 &&
                <Typography>Goal is achieved after {spanDays * value} days</Typography>
        }

            <ReactApexChart 
                options={options} 
                series={series} 
                type="line" 
                height={height} 
            />
        </Box>
    )
};

export default MyLineChart;