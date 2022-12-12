const getAllMessage = () => {
  return { type: "GET_ALL_MESSAGES" };
};

const removeMessage = (item) => {
  return { type: "REMOVE_MESSAGE", payload: item };
};

export { getAllMessage, removeMessage };
