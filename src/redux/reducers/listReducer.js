const initalState = {
  list: [
    { payload: "Primera", completed: "toDo" },
    { payload: "Segona", completed: "toDo" },
  ],
};

const listReducer = (state = initalState, action) => {
  switch (action.type) {
    case "INCREASE_LIST":
      return {
        /*  ...state,
        list: [...state.list, action.payload],

        /* state: {
          list: [...state.list, action.payload],
          id: state.id,
          completed: "toDo",
        },*/
        list: [...state.list, { payload: action.payload, completed: "toDo" }],
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
      return {
        list: state.list.map((item) =>
          item === action ? { ...item, completed: !item.completed } : item
        ),
        /*  state: {
          list: [...state.list, action.payload],
          id: state.id,
          completed: "Done",
        },*/
      };
    default:
      return state;
  }
};

export default listReducer;
