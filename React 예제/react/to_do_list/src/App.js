import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Todo from './Todo';

function App() {
  const [ todo, setTodo ] = useState([
    {id:1, text:'learn web'},
    {id:2, text:'get a job'},
  ]);
  const [ todoId, setTodoId ] = useState(2);

  let addTodo = (value)=>{
    let newTodos = [...todo];   // todo 배열을 복사
    let newId = todoId + 1;     
    setTodoId(newId);
    newTodos.push({id:newId, text:value, checked:false});   // 복사한 배열에 값을 저장
    setTodo(newTodos);                //원본 todo 배열에 복사본 newTodos를 밀어넣어서 교체
    document.querySelector('#todo').value = '';     
  }
  let todoUpdate = (id, value)=>{
    let newTodos = todo.map(item=> item.id === id ? {...item, checked:value} : item);   //중괄호 안에서도 스프레드 연산자를 사용할 수 있다

    setTodo(newTodos);
  }
  let deleteTodo = (id)=>{
    let newTodos = [...todo];
    let idx = newTodos.findIndex(item => item.id === id );
    newTodos.splice(idx, 1);
    
    setTodo(newTodos);
  }

  let todos = todo.map((item, idx)=>  
  <Todo data={item} key={idx} todoUpdate={todoUpdate} deleteTodo={deleteTodo} />);


  return (
    <div className="container">
      <h1>To do List</h1>
      <Form onSubmit={(e)=>{
        e.preventDefault();
        addTodo(e.target.todo.value);
        // console.log(e.target.todo.value);
      }}>
        <Form.Group className="mb-3" controlId="todo">
          <Form.Label>할 일 입력</Form.Label>
          <Form.Control type="text" name="todo" placeholder="할 일을 입력해주세요" />
        </Form.Group>
        <Button type="submit" variant="primary" >입력</Button>
      </Form>
      <hr />
      <div>
        {todos}
      </div>
    </div>
  );
}

export default App;
