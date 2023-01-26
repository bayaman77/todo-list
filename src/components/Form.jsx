import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";

const Form = ({ setStatus }) => {
  const {
    changeInputValue,
    addTodoItem,
    inputValue,
    editTodoItem,
    editStatus,
    toggleEditStatus,
    changeSelectValue
  } = useContext(TodoContext);

  const submitTodoHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    addTodoItem(newTodo);
  };

  const saveEditedTodo = (e) => {
    e.preventDefault();

    editTodoItem(inputValue);
    toggleEditStatus(false);
  };

  return (
    <form>
      <input
        value={inputValue}
        onChange={(e) => changeInputValue(e.target.value)}
        type="text"
        className="todo-input"
      />
      {editStatus ? (
        <button onClick={saveEditedTodo}>
          <i className="fas fa-redo"></i>
        </button>
      ) : (
        <button
          disabled={!inputValue}
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
      )}

      <div className="select">
        <select
          onChange={(e) => changeSelectValue(e.target.value)}
          name="todos"
          className="filter-todo"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
