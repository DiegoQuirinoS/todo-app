import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <header>
          <h1>Todo List</h1>
        </header>
        <Form />
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
