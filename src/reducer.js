export default function (state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          text: action.payload,
          completed: false,
          id: Math.random() * 1000,
        },
      ];

    case "complete":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });

    case "remove":
      return state.filter((todo) => todo.id !== action.payload);

    case "edit":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text;
        }
        return todo;
      });

    default:
      return state;
  }
}
