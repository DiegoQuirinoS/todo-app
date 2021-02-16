export const addTodo = (todo) => {
  return { type: "ADD_TODO", payload: todo };
};

export const filterTodo = (status = "all") => {
  return { type: "FILTER_TODO", payload: status };
};

export const changeStatus = (todo, status) => {
  return { type: "CHANGE_STATUS", payload: { todo, status } };
};

export const deleteTodo = (todo) => {
  return { type: "DELETE_TODO", payload: todo };
};
