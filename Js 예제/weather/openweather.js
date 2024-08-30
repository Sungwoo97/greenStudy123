let searchForm = document.querySelector('#search');
let time = document.querySelector('#time');
let ctemp = document.querySelector('#ctemp');
let ftemp = document.querySelector('#ftemp');
let humidity = document.querySelector('#humidity');
let icon = document.querySelector('#icon');
let locate = document.querySelector('#location');


//현재 위치 파악하기
//https://ipapi.co/json/

fetch('https://ipapi.co/json/')
.then((response) => {
  if (!response.ok) {
    throw new Error(`HTTP 오류! 상태: ${response.status}`);
  }
  return response.json();  // json 형식을 obj형식으로 변경
})
.then((result) => {
  console.log(result);    // 객체로 변환된 데이터를 result로 받기
  let city = result.city;
  let lat = result.latitude; 
  let lon = result.longitude; 
  locate.innerHTML = city;
  getGeo(lat, lon);
  
});


searchForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  let cityname = e.target.querySelector('input').value;
  callWeather(cityname);
  locate.innerHTML = cityname;
});

function callWeather(cn){
  let url = `http://api.openweathermap.org/geo/1.0/direct?q=${cn}&limit=5&appid=372f076d9a3602ec3ee38b9516f24939`;
  fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP 오류! 상태: ${response.status}`);
    }
    return response.json();  // json 형식을 obj형식으로 변경
  })
  .then((result) => {
    console.log(result);    // 객체로 변환된 데이터를 result로 받기
    let lat = result[0].lat; 
    let lon = result[0].lon; 
    getGeo(lat, lon);
  });
}
  function getGeo(lat, lon){
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=372f076d9a3602ec3ee38b9516f24939&units=metric`;

    fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 오류! 상태: ${response.status}`);
      }
      return response.json();  // json 형식을 obj형식으로 변경
    })
    .then((result) => {
      console.log(result);    // 객체로 변환된 데이터를 result로 받기   
      ctemp.innerHTML = result.main.temp  + '°C';
      ftemp.innerHTML = result.main.feels_like  + '°C';
      humidity.innerHTML = result.main.humidity  + '%';
      dt = result.dt;
      let wt = new Date(dt*1000);  // unix 시간표시 => 밀리세컨트 ( js 인식 가능)
      let convertedTime = `${wt.getFullYear()}/${String(wt.getMonth() + 1).padStart(2,'0')}/${String(wt.getDate()).padStart(2,'0')} 
      ${String(wt.getHours()).padStart(2,'0')}:${String(wt.getMinutes()).padStart(2,'0')}`;
      time.innerHTML = convertedTime;
      let code = result.weather[0].icon;
      let imgUrl = `https://openweathermap.org/img/wn/${code}@2x.png`;
      //https://openweathermap.org/img/wn/10d@2x.png
      icon.setAttribute('src', imgUrl);
      icon.style.display = 'block';
    });
    
}