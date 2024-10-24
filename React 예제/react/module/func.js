/*
export function func1(){
  document.querySelector('#title1').innerHTML = 'Hello';
}
const func2 = function func2(){
  document.querySelector('#title2').innerHTML = 'World';
}
export{func2}*/

/*
const obj = {
  func1 : function(){
    document.querySelector('#title1').innerHTML = 'Hello';
  },
  func2 : function(){
    document.querySelector('#title2').innerHTML = 'World';
  }
}
export default obj; */

const obj = {
  func1 : function(target, msg){
    document.querySelector(target).innerHTML = msg;
  }
}
export default obj;