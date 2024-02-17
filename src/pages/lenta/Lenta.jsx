import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { styles, chartOptions } from './LentaStyle';
import Header from 'src/components/layout/header/Header';

const Lenta = () => {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = [
            { id: 4, name: 'Ship A', views: [80, 60, 20], coefficients: [0.5, 0.7, 0.3] },
            { id: 5, name: 'Ship B', views: [120, 80, 30], coefficients: [0.6, 0.8, 0.4] },
            { id: 6, name: 'Ship C', views: [160, 100, 40], coefficients: [0.7, 0.9, 0.5] },
        ];
        setShips(data);
      } catch (error) {
        console.error('Error loading data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <Header />
    <div style={styles.container}>
      <h1 style={styles.heading}>Lenta</h1>
      {loading ? (
        <p style={styles.loading}>Loading...</p>
      ) : (
        <div style={styles.newsContainer}>
          {ships.map((item) => (
            <div key={item.id} style={styles.postContainer}>
              <strong>{item.name}</strong>
              <div style={styles.graphContainer}>
                    {item.views.map((view, index) => (
                    <Chart
                        key={index}
                        options={chartOptions}
                        series={[view]}
                        type="radialBar"
                        height="120"
                        width="70%"
                    />
                    ))}
                </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default Lenta;