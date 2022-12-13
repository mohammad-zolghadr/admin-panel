const removePost = (item) => {
  return { type: "REMOVE_POST", payload: item };
};

export { removePost };
