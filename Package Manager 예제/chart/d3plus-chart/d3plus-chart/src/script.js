    var data = [
    {id: "alpha", x: 4, y: 7},
    {id: "alpha", x: 5, y: 25},
    {id: "alpha", x: 6, y: 13},
    {id: "beta", x: 4, y: 17},
    {id: "beta", x: 5, y: 8},
    {id: "beta", x: 6, y: 13}
  ];
const data2 = [ 
{ "category": "A", "value": 30 },
{ "category": "B", "value": 80 }, 
{ "category": "C", "value": 45 }, 
{ "category": "D", "value": 60 }, 
{ "category": "E", "value": 20 }, 
{ "category": "F", "value": 90 },
{ "category": "G", "value": 50 } 
];


        // D3plus BarChart 생성
 new d3plus.BarChart()
  .data(data)
  .groupBy("id")
  .select('#barChart')
//.width(600)
//.height(400)
  .render();

new d3plus.LinePlot()
  .data(data2)
  .groupBy("id")
  .select('#lineChart')
//.width(600)
//.height(400)
  .x('category').y('value')
  .render();

