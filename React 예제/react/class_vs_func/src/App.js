import { Component, useState, useEffect } from 'react';
import './App.css';

function App() {
  const [ funcshow, setFuncshow ] = useState(true);
  const [ classshow, setClassshow ] = useState(true);
  return (
    <div className="container">
      <h1>함수형 클래스형 비교</h1>
      <button onClick={()=>{
        setFuncshow(false);
      }}>함수형 컴포넌트 제거</button>
      <button onClick={()=>{
        setClassshow(false);
      }}>클래스형 컴포넌트 제거</button>
      {/* 
      {funcshow ? <FuncComp initNumber={2} /> : null}
      {classshow ? <ClassComp initNumber={2} /> : null} 
      */}
      {funcshow && <FuncComp initNumber={2} />} 
      {classshow && <ClassComp initNumber={2} />}
      
      
    </div>
  );
}

let FuncId = 0; 

function FuncComp(props){


  //ES6 문법
  /*
  let obj = {firstName:'길동', lastName:'홍'};
  let firstName = obj.firstName;
  let lastName = obj.lastName;
  */
  /*
  let {lastName, firstName} = {firstName:'길동', lastName:'홍'};  // 객체의 이름과 통일 되어야 한다
  console.log(lastName, firstName);
  */
  /*
  let numberState = useState(props.initNumber);
  let number = numberState[0];
  let setNumber = numberState[1];   // 
  */
  const [number, setNumber] = useState(props.initNumber);
  const [date, setDate] = useState(new Date().toLocaleString());

  useEffect(
    () => {
      console.log(++FuncId); //1번, componentDidMount()
      return () => {    // 2번, componentDidUpdate()
        document.title = number;
        console.log('타이틀 변경됨')
      };
    },
    [], // 빈 값일땐 1번 구문이 최초 한번만 실행, 값이 있다면 그 값이 변경 되었을때 2번 구문이 실행 후 1번 구문 실행
  );

  return(
    <>
    {console.log('render')}
    <div className="container">
      <h2>함수형 컴포넌트</h2>
      <p>Number : {number} </p>
      <p>Date : {date}</p>
      <input type="button" value="random" onClick={()=>{
        setNumber(Math.random);
      }} />
      <button onClick={()=>{
        setDate(new Date().toLocaleString());
      }} >Update</button>
    </div>
    </>
  )
}

class ClassComp extends Component{
  
  state = {
    number : this.props.initNumber,
    date : new Date().toLocaleString()
  }
  
  UNSAFE_componentWillMount(){  // 렌더 이전에
    console.log('componentWillMount 실행');
  }
  componentDidMount(){  // 렌더 이후에
    console.log('componentDidMount 실행');
  }
  shouldComponentUpdate(nextProps, nextState){  // 업데이트를 할 것인지
    console.log('shouldComponentUpdate 실행');
    return true;
  }
  UNSAFE_componentWillUpdate(nextProps, nextState){   //업데이트 한다면 렌더 이전에
    console.log('componentWillUpdate 실행');
  }
  componentDidUpdate(nextProps, nextState){   // 업데이트를 한다면 렌더 이후에
    console.log('componentDidUpdate 실행');
  }
  componentWillUnmount(nextProps, nextState){   // 삭제되기 이전에
    console.log('componentWillUnmount 실행 - 삭제되기 전 실행');
  }
  

  render(){
    // console.log('render 실행');
    return(
      <div className="container">
        <h2>클래스형 컴포넌트</h2>
        <p>Number : {this.state.number} </p>
        <p>Date : {this.state.date}</p>
        <input type="button" value="random" onClick={()=>{
          this.setState({
            number : Math.random()
          })
        }} />
        <button onClick={()=>{
        this.setState({
          date : new Date().toLocaleString()
        })
      }} >Update</button>
      </div>
    )
  }
}

export default App;
