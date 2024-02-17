import ReactApexChart from 'react-apexcharts';

const LineChart = ({ selectedData = {rank: 1, value: 1} }) => {
    const series = [
      {
          name: 'Series 1',
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ];

    const options = {
      chart: {
          height: 200,
          type: 'line',
      },
      xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
      stroke: {
          curve: 'smooth', // Set the curve type to 'smooth'
      },
    };

  return (
    <div>
        <p>Statistics: {selectedData.rank}</p>
        <ReactApexChart options={options} series={series} type="line" height={200} />
    </div>
  );
};

export default LineChart;
