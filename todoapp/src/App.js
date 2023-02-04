import React,{ useState } from 'react';
import './App.css';
import Todoinput from './components/Todoinput';
import Todolist from './components/Todolist';

function App() {
  const[ todo, setTodo ] = useState("")
  const[ todos, setTodos ] = useState([])
  const[ editId, setEditId ] = useState(0)
  const[ numtodos, setNumtodos] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(todo!=="" && numtodos <5){
      setTodos([{id: `${todo}-${Date.now()}`, todo},...todos])
      setNumtodos(numtodos+1)
      setTodo("");
    }
    else{
      console.log("You cannot add more than 5 todos!")
    }

    if(editId){
      const editTodo = todos.find((i) => i.id === editId)
      const updatedTodo = todos.map((t) => 
      t.id === editTodo.id ?
      ({ id:t.id, todo}): ({id: t.id, todo: t.todo}) 
      )

      setTodos(updatedTodo)
      setEditId(0)
      setTodo("")
    }  
  }

  const handleDelete = (id) => {
    const delTodo = todos.filter((t)=> t.id!==id) 
    setTodos(delTodo)
  }

  const handleEdit = (id) => {
    const editTodo = todos.find((t)=> t.id=== id)
    setTodo(editTodo.todo)
    setEditId(id)

  }
  
  return (
    <div className='App'>
    <div className='container'>
    <h1>To-do List App</h1>
    <Todoinput handleSubmit={handleSubmit} todo={todo} setTodo={setTodo} editId={editId} />
    <Todolist todos={todos} handleDelete={handleDelete} handleEdit={handleEdit} />
    </div>
    </div>
  );
}

export default App;
