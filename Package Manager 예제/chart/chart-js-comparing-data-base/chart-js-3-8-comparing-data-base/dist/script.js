const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
  let data2023 = {
      label: '2023',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 0, 0)',
      data: [10, 5, 5, 4, 10, 5, 20],
  };

  let data2024 = {
      label: '2024',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(0, 0, 255)',
      data: [0, 10, 5, 2, 20, 30, 45]      
    };   

  const data = {
    labels: labels,
    datasets: [data2023,data2024]
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      maintainAspectRatio :false,
      scales: {
        y: {
          stacked: true
        }
      }
    }
  };

const myChart = new Chart(
    document.getElementById('line-chart'),
    config
  );