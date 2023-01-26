import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [filteredTodos, setFilteredTodos] = useState([]);
  const { todos, selectValue } = useContext(TodoContext);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, selectValue]);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const filterHandler = () => {
    switch (selectValue) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} text={todo.text} id={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
