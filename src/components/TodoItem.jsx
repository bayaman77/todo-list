import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";

const TodoItem = ({ text, todo, id }) => {
  const { markAsCompleted, removeTodoItem, changeInputValue, changeEditingTodoId, toggleEditStatus } = useContext(TodoContext);

  const editHandler = () => {
    toggleEditStatus(true);
    changeInputValue(text);
    changeEditingTodoId(id);
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={() => markAsCompleted(id)} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={editHandler} className="edit-btn">
        <i className="fas fa-edit"></i>
      </button>
      <button onClick={() => removeTodoItem(id)} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default TodoItem;
