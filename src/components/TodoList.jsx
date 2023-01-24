import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ dispatch, todos, setTodos, filteredTodos, setEdit, setInputText, setEditingTodoId}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">

        {filteredTodos.map((todo) => (
          <TodoItem
          dispatch={dispatch}
            key={todo.id}
            text={todo.text}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
            setEdit={setEdit}
            setInputText={setInputText}
            setEditingTodoId={setEditingTodoId}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
