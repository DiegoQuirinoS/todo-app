import React from "react";
import { useDispatch } from "react-redux";
import {
  changeStatus,
  filterTodo,
  deleteTodo,
} from "../redux/todoCreateAction";

function Todo({ todo }) {
  const dispatch = useDispatch();

  const handleChange = () => {
    todo.status === "completed"
      ? dispatch(changeStatus(todo, "uncompleted"))
      : dispatch(changeStatus(todo, "completed"));

    dispatch(filterTodo());
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo));
    dispatch(filterTodo());
  };

  return (
    <tr className="todo-item">
      <td
        className={`col-12 ${todo.status === "completed" ? "completed" : ""}`}
      >
        {todo.description}
      </td>
      <td>
        <button className="complete-btn" onClick={() => handleChange()}>
          <i className="fas fa-check"></i>
        </button>
      </td>
      <td>
        <button className="trash-btn" onClick={() => handleDelete()}>
          <i className="fas fa-trash"></i>
        </button>
      </td>
    </tr>
  );
}

export default Todo;
