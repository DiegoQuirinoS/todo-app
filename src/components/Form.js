import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, filterTodo } from "../redux/todoCreateAction";

function Form() {
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("all");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterTodo(status));
  })

  const submit = (e) => {
    e.preventDefault();
    let todo = {
      description,
      status: "uncompleted",
    };
    dispatch(addTodo(todo));    
    dispatch(filterTodo(status));
    setDescription("");
  };

  const handleStatus = (e) => {  
    setStatus(e.target.value);
    dispatch(filterTodo(e.target.value));
  };

  return (
    <form onSubmit={(e) => submit(e)}>
      <input
        type="text"
        className="todo-input"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          name="todos"
          className="filter-todo"
          onChange={(e) => handleStatus(e)}
          value={status}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
