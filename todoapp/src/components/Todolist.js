import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const Todolist = ({ todos, handleDelete, handleEdit }) => {
  const handleChecked = (e) => {
    e.target.classList.toggle("checked");
  };

  return (
    <ul className="todolist">
      {todos &&
        todos.map(({ todo, id }) => (
          <li className="singletodo">
            <span className="todotext" key={id} onClick={handleChecked}>
              {todo}
            </span>
            <button className="listbtn" onClick={() => handleEdit(id)}>
              <MdEdit />
            </button>
            <button className="listbtn" onClick={() => handleDelete(id)}>
              <MdDelete />
            </button>
          </li>
        ))}
    </ul>
  );
};

export default Todolist;
