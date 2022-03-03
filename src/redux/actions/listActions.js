export const increaseList = (amount) => {
  return {
    type: "INCREASE_LIST",
    payload: amount,
  };
};

export const deleteTask = (task) => {
  return {
    type: "DELETE_TASK",
    // payload: { id: task.id, content: task.content },
    payload: task,
  };
};
export const resetList = () => {
  return {
    type: "RESET_LIST",
  };
};
export const toDO = (completed) => {
  return {
    type: "TODO",

    completed: completed,
  };
};
