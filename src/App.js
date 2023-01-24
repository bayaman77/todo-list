import { useEffect, useState, useReducer } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import reducer from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem("todos")))

  const [inputText, setInputText] = useState("");

  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editingTodoId, setEditingTodoId] = useState(0)

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [state, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(state.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(state.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(state);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(state));
  };
  

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        state={state}
        dispatch={dispatch}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
        edit={edit}
        setEdit={setEdit}
        editingTodoId={editingTodoId}
      />
      <TodoList
        todos={state}
        dispatch={dispatch}
        filteredTodos={filteredTodos}
        setEdit={setEdit}
        setInputText={setInputText}
        setEditingTodoId={setEditingTodoId}
      />
    </div>
  );
}

export default App;
