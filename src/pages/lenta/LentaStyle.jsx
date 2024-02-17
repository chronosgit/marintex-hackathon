export const chartOptions = {
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          margin: 0,
          size: '70%',
        },
        track: {
          background: '#f4f4f4',
          strokeWidth: '90%',
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: '16px',
            offsetY: 20,
            color: '#333',
            show: true,
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
      },
    },
    stroke: {
      dashArray: 4,
    },
    labels: ['Value'],
};
  
export const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        maxWidth: '800px',
        margin: 'auto',
        padding: '20px',
        backgroundColor: '#f4f4f4',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        fontSize: '24px',
        color: '#333',
        marginBottom: '10px',
    },
    loading: {
        color: '#777',
    },
    newsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    postContainer: {
        marginBottom: '20px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        backgroundColor: '#fff',
    },
    graphContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '10px',
    },
    coefficient: {
        // marginLeft: 'auto',
        // marginRight: 'auto'
    }
};
  
  
  