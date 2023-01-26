import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./TodoContext";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <TodoProvider>
        <Form />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
