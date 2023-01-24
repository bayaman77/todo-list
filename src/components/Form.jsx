import React from "react";

const Form = ({
  inputText,
  setInputText,
  state,
  dispatch,
  setStatus,
  edit,
  setEdit,
  editingTodoId,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "add",
      payload: inputText,
    });

    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  const saveEditedTodo = (e) => {
    e.preventDefault();

    dispatch({
      type: "edit",
      payload: {
        id: editingTodoId,
        text: inputText,
      },
    });

    setInputText("");
    setEdit(false);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      {edit ? (
        <button onClick={saveEditedTodo}>
          <i className="fas fa-redo"></i>
        </button>
      ) : (
        <button
          disabled={!inputText}
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
      )}

      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;