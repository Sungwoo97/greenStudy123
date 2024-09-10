  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
  let data2021 = {
      label: '2021',
      backgroundColor: 'rgba(255, 99, 132, .5)',
      borderColor: 'rgb(255, 0, 0)',
      data: [10, 5, 5, 4, 10, 5, 20],
  };

  let data2022 = {
      label: '2022',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(0, 0, 255)',
      data: [0, 10, 5, 2, 20, 30, 45],
    };   

  const data = {
    labels: labels,
    datasets: [data2021,data2022]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      maintainAspectRatio:false,
       scales: {
            x: {
                stacked: true
            },
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