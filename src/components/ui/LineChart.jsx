import { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = ({ ships, filter }) => {
  useEffect(()=> {
    const fetchData = async () => {
      // console.log(localStorage.getItem('access-token'));
      const result = await getAllMonitorings();
      setShips(result);
      // console.log(result[0]);
      setSelectedData(result[0]);
    }
    fetchData();
  }, []);
  let forSeries = ships.map(ship => ship[filter]);
  let forCategroies = ships.map(ship => ship['createdDate']);
    const series = [
      {
          name: 'Series 1',
          data: forSeries,
      },
    ];

    const options = {
      chart: {
          height: 200,
          type: 'line',
      },
      xaxis: {
          categories: forCategroies,
      },
      stroke: {
          curve: 'smooth', // Set the curve type to 'smooth'
      },
    };

  return (
    <div>
        <ReactApexChart options={options} series={series} type="line" height={200} />
    </div>
  );
};

export default LineChart;
