export default function todoReducer(
  state = {
    todos: [
      { description: "study", status: "completed" },
      { description: "walk", status: "uncompleted" },
    ],
    filteredTodos: [],
  },
  action
) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "FILTER_TODO":
      return {
        ...state,
        filteredTodos:
          action.payload === "all"
            ? state.todos
            : state.todos.filter((todo) => todo.status === action.payload),
      };
    case "CHANGE_STATUS":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return todo === action.payload.todo
            ? (todo = { ...todo, status: action.payload.status })
            : todo;
        }),
      };
    case 'DELETE_TODO':
      console.log('delete')
      let index = state.todos.indexOf(action.payload);
      state.todos.splice(index, 1);
      return {
        ...state,
        todos: [...state.todos]
      }
    default:
      return state;
  }
}
