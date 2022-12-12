const getAllMessage = () => {
  return { type: "GET_ALL_MESSAGES" };
};

const removeMessage = (id) => {
  return { type: "REMOVE_MESSAGE", id };
};

export { getAllMessage, removeMessage };
