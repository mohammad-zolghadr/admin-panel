const removePost = (item) => {
  return { type: "REMOVE_POST", payload: item };
};

const searchPost = (keyword) => {
  return { type: "SEARCH_POST", payload: keyword };
};

export { removePost };
