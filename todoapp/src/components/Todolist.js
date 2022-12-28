import React from 'react'

const Todolist = ({todos,handleDelete, handleEdit}) => {
  return (
    
    <ul className="todolist">
    {todos && todos.map(({todo, id})=>(
    <li className='singletodo'>
    <span className='todotext' key={id}>{todo}</span>
    <button className='listbtn'onClick={() => handleEdit(id)}>Edit</button>
    <button className='listbtn' onClick={()=>handleDelete(id)}>Delete</button>
    </li>
    ))}
    </ul>

    
  )
}

export default Todolist