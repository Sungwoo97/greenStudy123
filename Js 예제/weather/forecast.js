let ot = new Date();
let currentTime = ot.getTime(); // 밀리초 변환
let m30ago = currentTime - (30*60*1000); // 30분전으로 변경
let ct = new Date(m30ago); //30분전의 날짜 생성


let year = ct.getFullYear();
let month = String(ct.getMonth() + 1).padStart(2, '0');
let day = String(ct.getDate()).padStart(2, '0');
let hour = ct.getHours();
let minutes = String(ct.getMinutes()).padStart(2, '0');


let queryDate = `${year}${month}${day}`;
let queryTime =`${hour}${minutes}`;
console.log(queryDate, queryTime);
let query = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=jTQEdaAGysNAd0Yt5IauyO%2BVLmyfRGQKcPhnH%2BYxydyiVXCEcJg1RpDcrb2AyNx4y6UvlyfLXlGdDfiK7LHyzQ%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${queryDate}&base_time=${queryTime}&nx=60&ny=127`;

fetch(query)
  .then(res=>res.json())
  .then(data=>{
    let result = data.response.body.items.item;
    let filteredTemp = result.filter(item=>item.category === 'T1H');
    let filteredHMT = result.filter(item=>item.category === 'REH');
    console.log(filteredTemp,filteredHMT);
    // 단기 예보의 정보를 받아오는 배열
    let filteredArr = filteredTemp.map(tempItem=>{
      let humItem = filteredHMT.find(item=>item.fcstTime === tempItem.fcstTime);
      return {
        fcstDate: tempItem.fcstDate,
        fcstTime: tempItem.fcstTime,
        tempValue: tempItem.fcstValue,
        humValue: humItem.fcstValue
      }
    });
    console.log(filteredArr);
    let dataHTML = '';

    for(let arr of filteredArr){
      dataHTML += `<tr>
        <td>${queryDate}</td>
        <td>${queryTime}</td>
        <td>${arr.fcstTime}</td>
        <td>${arr.tempValue}</td>
        <td>${arr.humValue}</td>
      </tr>`;
    }
    let tbody = document.querySelector('tbody');
    tbody.innerHTML= dataHTML;
  })