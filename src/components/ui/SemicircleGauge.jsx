import GaugeChart from 'react-gauge-chart';

const SemicircleGauge = ({ coefficient }) => {
  return (
    <GaugeChart
      id="gauge-chart"
      percent={coefficient}
      textColor="#000000"
      formatTextValue={(value) => value.toFixed(2)}  // Adjust the formatting as needed
    />
  );
};

export default SemicircleGauge;
