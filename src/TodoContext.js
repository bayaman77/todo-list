import { createContext, useReducer } from "react";
import reducer from "./reducer";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  inputValue: "",
  editingTodoId: null,
  editStatus: false,
  selectValue: 'all'
};

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    selectValue: state.selectValue,
    editStatus: state.editStatus,
    inputValue: state.inputValue,
    todos: state.todos,
    changeInputValue: (inputValue) => {
      dispatch({
        type: "CHANGE_INPUT_VALUE",
        payload: inputValue,
      });
    },
    addTodoItem: (newTodo) => {
      dispatch({
        type: "ADD",
        payload: newTodo,
      });
    },
    markAsCompleted: (todoItemId) => {
      dispatch({
        type: "COMPLETE",
        payload: todoItemId,
      });
    },
    removeTodoItem: (todoItemId) => {
      dispatch({
        type: "REMOVE",
        payload: todoItemId,
      });
    },
    editTodoItem: ( inputValue) => {
      dispatch({
        type: "EDIT",
        payload: inputValue
      });
    },
    changeEditingTodoId: (id) => {
      dispatch({
        type: 'CHANGE_EDITING_TODO_ID',
        payload: id
      })
    },
    toggleEditStatus: (status) => {
      dispatch({
        type:'TOGGLE_EDIT_STATUS',
        payload: status
      })
    },
    changeSelectValue: (value) => {
      dispatch({
        type: 'CHANGE_SELECT_VALUE',
        payload: value
      })
    }
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
