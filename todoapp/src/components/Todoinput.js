import React from 'react'

const Todoform = ({handleSubmit, todo, setTodo, editId}) => {

  return (
    <div>
    <form className='todoinput' onSubmit={handleSubmit}>
      <input type = "text" value={todo} placeholder='Enter your Todo' onChange={(e)=> setTodo(e.target.value)} />
      <button type ="submit" >{editId ? "Edit":"Add"}</button>
    </form>
    </div>
  )
}

export default Todoform