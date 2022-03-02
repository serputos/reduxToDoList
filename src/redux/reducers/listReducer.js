const initalState = {
  list: ["Primera Tasca", "Segona Tasca"],
};

const listReducer = (state = initalState, action) => {
  switch (action.type) {
    case "INCREASE_LIST":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case "DELETE_TASK":
      return {
        ...state,
        //  list: [...state.list.slice(0, action.payload.value), action.payload],
        list: (state = state.list.filter((task) => task !== action.payload)),
      };
    case "RESET_LIST":
      return {
        ...state,
        list: [],
      };
    case "TODO":
      return action.payload;
    case "DONE":
      return action.payload;
    default:
      return state;
  }
};

export default listReducer;
