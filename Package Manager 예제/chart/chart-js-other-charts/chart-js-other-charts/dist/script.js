Chart.defaults.global.maintainAspectRatio = false;

var ctxRadar = $("#radar-chart"),
    ctxPolar = $("#polar-area-chart"),
    ctxBubble = $("#bubble-chart");

var radarChart = new Chart(ctxRadar, {
  type: 'radar',
  data: {
    labels: ["Bacon", "Video Games", "Dates", "Other Food", "Movies"],
    datasets: [
      {
        label: "Monthly Budget for College Freshmen",
        data: [200,50,50,150,100],
        backgroundColor: "rgba(0,148,169,.5)",
        borderColor: "rgb(0,148,169)",
        borderWidth: 1
      },
      {
        label: "Monthly Budge for College Seniors",
        data: [100,0,100,250,50],
        backgroundColor: "rgba(255,222,16,.5)",
        borderColor: "rgb(255,222,16)",
        borderWidth: 1
      }
    ]
  },
  options: {
    scale: {
      ticks: {
        beginAtZero: true,
        fixedStepSize: 50
      }
    }
  }
});

var polarAreaChart = new Chart(ctxPolar, {
  type: 'polarArea',
  data: {
    labels: ["Bacon", "Video Games", "Dates", "Other Food", "Movies"],
    datasets: [
      {
        label: "Monthly Budget for College Freshmen",
        data: [200,50,70,150,100],
        backgroundColor: [
        "rgba(242,166,54,0.5)",
        "rgba(39,79,76,0.5)",
        "rgba(40,161,130,0.5)",
        "rgba(252,237,207,0.5)",
        "rgba(206,209,22,0.5)"
      ],
      borderColor: [
        "rgb(242,166,54)",
        "rgb(39,79,76)",
        "rgb(40,161,130)",
        "rgb(252,237,207)",
        "rgb(206,209,22)"
      ],
      borderWidth: 1
      }
    ]
  },
   options: {
    scale: {
      ticks: {
        beginAtZero: true,
        fixedStepSize: 50
      }
    }
  }
});

var bubbleChart = new Chart(ctxBubble, {
  type: 'bubble',
  data: {
    datasets: [
      {
        label: 'First Dataset',
        data: [
          { x: 10, y: 12, r: 10 },
          { x: 11, y: 6, r: 15 },
          { x: 12, y: 10, r: 38 },
          { x: 13, y: 13, r: 15 },
          { x: 14, y: 8, r: 20 }
        ],
        backgroundColor: [
          "rgba(242,166,54,0.5)",
          "rgba(39,79,76,0.5)",
          "rgba(40,161,130,0.5)",
          "rgba(252,237,207,0.5)",
          "rgba(206,209,22,0.5)"
        ]
      }
    ]
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});