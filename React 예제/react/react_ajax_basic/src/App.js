import { useEffect, useState } from 'react';
import './App.css';

function Nav({list, onclick}){    //출력할 목록과 함수를 넘겨준다
  /*
  list 배열의 값을 이용하여 listHTML 배열 생성
  listHTML에는  <li><a href="1">UI/UX 개발 </a></li> 형식으로 3개가 생성 되도록
  */
  let listHTML = list.map(l=> <li key={l.id}><a href={l.id} data-id={l.id} onClick={(e)=>{    
    e.preventDefault();
    let idx =  e.target.dataset.id;
    onclick(idx);     //넘겨받은 함수를 실행하여 부모의 함수를 실행한다
  }
  }>{l.title} </a></li>);

  return(
    <nav>
      <ul>
        {listHTML}
      </ul>
    </nav>
  )
}

function Article(props){
  return(
    <article>
      <h2>{props.title}</h2>
      <h3>{props.desc}</h3>
    </article>
  )
}


function App() {

  const [ article, setArticle ] = useState({  //객체 형식은 중괄호
    title : 'welcome',
    desc : 'Hello, React & Ajax'
  });
  const [ list, setList] = useState([]);    //배열 형식은 대괄호
  useEffect(()=>{
    fetch('./data/task.json')   // build 했을 때를 기준으로 데이터를 찾아야한다
    .then(res=>res.json())  //응답의 결과가 있다면 javascript의 객체 형식으로 생성
    .then(result=>{ setList(result); });  // 생성된 결과로 할 일을 작성
  },[])

  return (
    <div className="App">
       <h1>프론트엔드 개발자</h1>
      <p>기본언어인 html, css, javascript부터 학습합니다.</p>
      <Nav list={list} onclick={id=>{   //출력할 목록과 이벤트 함수를 Nav에게 넘겨주고 있다
        console.log(id);
        fetch(`./data/${id}.json`)   // build 했을 때를 기준으로 데이터를 찾아야한다
        .then(res=>res.json())  //응답의 결과가 있다면 javascript의 객체 형식으로 생성
        .then(result=>{ setArticle({
          title : result.title,
          desc : result.desc
        }); });  // 생성된 결과로 할 일을 작성
      }} />
      <Article title={article.title} desc={article.desc} />
    </div>
  );
}

export default App;
