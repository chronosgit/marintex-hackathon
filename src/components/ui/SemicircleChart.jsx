import ReactApexChart from 'react-apexcharts';

const SemicircleChart = () => {
  // Sample data
  const series = [44, 55, 13, 43, 22];

  const options = {
    chart: {
      type: 'pie',
      height: 50,
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 30,
      },
    },
    labels: ['Apple', 'Banana', 'Cherry', 'Date', 'Fig'],
  };

  return (
    <div>
      <ReactApexChart style={{backgroundColor: 'blue', marginLeft: 'auto', marginRight: 'auto'}} options={options} series={series} type="pie" height={300} />
    </div>
  );
};

export default SemicircleChart;
