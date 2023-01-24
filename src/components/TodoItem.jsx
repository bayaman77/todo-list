import React from "react";

const TodoItem = ({ dispatch, text, todo, setEdit, setInputText, setEditingTodoId }) => {

  const deleteHandler = () => {
    dispatch({
      type: 'remove',
      payload: todo.id
    })
  };

  const compeleteHandler = () => {
    dispatch({
      type: "complete",
      payload: todo.id
    })
  };

  const editHandler = () => {
    setEdit(true)
    setInputText(text)
    setEditingTodoId(todo.id)
  }

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={compeleteHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={editHandler} className="edit-btn">
        <i className="fas fa-edit"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default TodoItem;
