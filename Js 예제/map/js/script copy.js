

/*
대상.getAttribute('속성명') 속성명의 값을 반환
let a = b.getAttribute('c')  b요소의 c속성의 값을 a에 할당
let target = a.getAttribute('href') 
*/

let tabMenu = document.querySelectorAll('.tab-menu a');
let tabContent = document.querySelectorAll('#tab-content > div');

for(let tm of tabMenu){
  tm.addEventListener('click', function(e){
    e.preventDefault();
    let targetId = tm.getAttribute('href') ;
    let lat =  tm.getAttribute('data-lat') ;
    let lng =  tm.getAttribute('data-lng') ;
    let title = tm.innerText;   

    for(let tm of tabMenu){
      tm.classList.remove('active');
    }   
    tm.classList.add('active');

    for(let tc of tabContent){
      tc.classList.remove('active');
    } 
    let target = tm.getAttribute('href');    
    document.querySelector(target).classList.add('active');

    makeMap(targetId, lat, lng, title);
  });
}

makeMap('#map', '37.5697291', '126.9897183', '그린컴퓨터아트 학원');

function makeMap(target, lat, lng, title){
  console.log(target, lat, lng, title);

  var mapContainer = document.querySelector(target), // 지도를 표시할 div 
  mapOption = { 
      center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
      level: 3 // 지도의 확대 레벨
  };
  
  var map = new kakao.maps.Map(mapContainer, mapOption);
  
  // 마커가 표시될 위치입니다 
  var markerPosition  = new kakao.maps.LatLng(lat, lng); 
  
  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
  position: markerPosition
  });
  
  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);
  
  var iwContent = `<div style="padding:5px;">${title}<br><a href="https://map.kakao.com/link/map/Hello World!,${lat},${lng}" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/Hello World!,${lat},${lng}, " style="color:blue" target="_blank">길찾기</a></div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
  iwPosition = new kakao.maps.LatLng(lat, lng); //인포윈도우 표시 위치입니다
  
  // 인포윈도우를 생성합니다
  var infowindow = new kakao.maps.InfoWindow({
  position : iwPosition, 
  content : iwContent 
  });
  
  // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
  infowindow.open(map, marker); 
  
}
