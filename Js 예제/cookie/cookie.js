const popup = document.querySelector('.popup');
const check = document.querySelector('#check');
const button = document.querySelector('button');

button.addEventListener('click', ()=>{
  if(check.checked){
    //쿠키 생성
    setCookie('Company', 'ABC', 1);
  }else{
    //쿠키 제거
    delCookie('Company','ABC');
  }
  popup.classList.remove('show');
});

function setCookie(name, val, due){
  let date = new Date();
  date.setDate(date.getDate() + due);

  let myCookie = `${name}=${val};expires=`+date.toUTCString();
  document.cookie = myCookie;
}

function delCookie(name, val){
  let date = new Date();
  date.setDate(date.getDate() - 1);

  let myCookie =`${name}=${val};expires=`+date.toUTCString();
  document.cookie = myCookie;
}

function checkCookie(name, val){
  let checkCookies = `${name}=${val}`
  if(document.cookie.search(checkCookies) === -1){
    popup.classList.add('show');
  }
}
checkCookie('Company','ABC');