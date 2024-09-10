  const ctx = $('#line-chart');
  const data2023 = {
      label: '2023년 실적',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 10
      }
  const data2024 = {
      label: '2024년 실적',
      data: [3, 12, 10, 17, 14, 18],
      borderWidth: 10,
      fill: true,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.5,
      }
  const data = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
    datasets: [data2023, data2024]
    }

  
  new Chart(ctx, {
    type: 'line',
    data: data,
     
    options:{
      maintainAspectRatio : false
    }
  });