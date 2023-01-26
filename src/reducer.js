export default function (state, action) {
  switch (action.type) {
    case "CHANGE_INPUT_VALUE": {
      return {
        ...state,
        inputValue: action.payload,
      };
    }
    case "ADD": {
      console.log(state.todos);
      return {
        ...state,
        todos: [...state.todos, action.payload],
        inputValue: "",
      };
    }
    case "COMPLETE": {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    }
    case "REMOVE": {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    }
    case "EDIT": {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === state.editingTodoId
            ? { ...todo, text: action.payload }
            : todo
        ),
        inputValue: "",
      };
    }
    case 'CHANGE_EDITING_TODO_ID': {
      return{
        ...state,
        editingTodoId: action.payload
      }
    }
    case 'TOGGLE_EDIT_STATUS': {
      return{
        ...state,
        editStatus: action.payload
      }
    }
    case 'CHANGE_SELECT_VALUE': {
      return{
        ...state,
        selectValue: action.payload
      }
    }
    default:
      return state;
  }
}
