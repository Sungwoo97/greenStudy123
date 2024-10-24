//객체 생성후 사용 방법1
let front = {
  a:'html',
  b: 'css',
  c: 'javascript'
}
let back = {
  a:'php',
  b:'asp',
  c:'jsp'
}
console.log(front.a);

//객체 생성후 사용 방법2 함수로 객체 생성
function front1(){
  this.a = 'html';
  this.b = 'css';
  this.c = 'javascript';
}
let frontlangs = new front1();
console.log(frontlangs.a);

//객체 생성후 사용 방법2-1 함수로 객체 생성
function lang(x,y,z){
  this.a = x;
  this.b = y;
  this.c = z;
}
let backlangs = new lang('php', 'asp', 'jsp');
console.log(backlangs.a);
//객체 생성후 사용 방법3 class
class langs {
  constructor(x,y,z){
    this.a = x;
    this.b = y;
    this.c = z;
  }
}
let frontlanguage = new langs ('html', 'css', 'javascript');
console.log(frontlanguage.a);
//extends를 통한 클래스 상속(확장)
class Web {
  constructor(skill){
    this.tech = skill;
  }
  present(){
    return `나는 이제 ${this.tech}를 할 수 있다!`;
  }
}
class Stack extends Web{
  constructor(skill, step){
    super(skill); // 부모 클래스에 값을 전달 // this.tech = skill;
    this.stage = step;
  }
  show(){
    return `${this.present()}  그래서 ${this.stage}는 마스터했다.`;
  }
}

// let mySkill = new Web('html');
// console.log(mySkill.tech);
// console.log(mySkill.present());

// let myStack = new Stack('html','초보');
// console.log(myStack.tech);
// console.log(myStack.show());
// console.log(myStack);

export default Stack;