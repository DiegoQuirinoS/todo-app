import React from "react";
import { useSelector } from "react-redux";
import { filteredTodos } from "../redux/todosSelector";
import Todo from "./Todo";

function TodoList() {
  const todos = useSelector(filteredTodos);
  return (
    <div className="container-fluid todo-list">
      <table className="table">
        <tbody>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
