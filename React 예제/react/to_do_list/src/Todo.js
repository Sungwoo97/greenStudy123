import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Todo = ({data, todoUpdate, deleteTodo})=>{
  const [ isChecked, setIsChecked ] = useState(false);
  let className = '';

  const handleCheckboxClick = (e)=> {
    let value = !isChecked;
    setIsChecked(value);
    todoUpdate(data.id, value);
  }
  if(isChecked){
     className = 'checked';
  }
  let todoDelete = ()=>{
    deleteTodo(data.id);
  }

  return(
    <div>
      <Form.Check type="checkbox" id={data.id}>
        <Form.Check.Input type="checkbox" onClick={handleCheckboxClick} />
        <Form.Check.Label className={className} >{data.text}</Form.Check.Label>
        <Button  variant="danger" size="sm" onClick={todoDelete} >삭제</Button>
      </Form.Check>
    </div>
  )
}

export default Todo;