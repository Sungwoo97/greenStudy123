import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, Link, NavLink, useParams  } from "react-router-dom";

let contents = [
  {id:1, title:'HTML', desc:'HTML is ...'},
  {id:2, title:'CSS', desc:'CSS is ...'},
  {id:3, title:'Javascript', desc:'Javascript is ...'}
];

function Home() {
  return (
    <div className="App">
     <h2>Home</h2>
     
    <Link to="/topics">Topics</Link>
    <Link to="/contact">Contact</Link>
      
    </div>
  );
}

function Topics() {

  const [list , setList] = useState([]);
  const [result , setResult] = useState([]);
  /*for(let i = 0; i < contents.length; i++){
    list.push(<li key={contents[i].id}><NavLink to={"/topics/"+contents[i].id}>{contents[i].title}</NavLink></li>);
  }*/
    // list = contents.map(c=> <li key={c.id}><NavLink to={"/topics/"+c.id}>{c.title}</NavLink></li>); 

    // Could be GET or POST/PUT/PATCH/DELETE
    useEffect(()=>{
      fetch('https://dummyjson.com/products?limit=3')
      .then(res => res.json())
      .then(data=>{
        let result = data.products;
        setList(result.map(p=> <li key={p.id}><NavLink to={"/topics/"+p.id}>{p.title}</NavLink></li>));
        setResult(result);
      });
    },[]);

/* { status: 'ok', method: 'GET' } */
  return (
    <div className="App">
      <h2>Topics</h2>
      <nav>
        <ul>
          {list}
        </ul>
      </nav>
      <Routes>
        <Route path=":topic_id" element={<Topic data={result} />} />
      </Routes>
    </div>
  );
}
function Topic(props){
  let data = props.data;
  console.log(data);
  // let Params = useParams();
  // let topic_id = Params.topic_id;
  let {topic_id} = useParams();
  console.log(topic_id);

  let selected_topic = {
    title:'Sorry',
    desc:'Not Found'
  }
  /*
  for(let i = 0; i<contents.length; i++){
    if(Number(topic_id) === contents[i].id){
      selected_topic = contents[i];
      break;
    }
  }*/
  let idx = data.findIndex(d=> d.id === Number(topic_id));
  selected_topic = data[idx];

  return(
    <div>
      <h3>{selected_topic ? selected_topic.title : "No Title" }</h3>
      <p>{selected_topic ? selected_topic.description : "No Desc" }</p>
      {selected_topic && <img src={selected_topic.thumbnail} alt="" />}
    </div>
  )
}

function Contact() {
  return (
    <div className="App">
      <h2>Contact</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/topics">Topics</Link>
      </nav>
      
    </div>
  );
}

function App() {
  return (
    <div className="App">
     <h1>router</h1>
     <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
     </nav>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/topics/*" element={<Topics />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </div>
  );
}



export default App;
