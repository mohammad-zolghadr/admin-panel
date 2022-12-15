const removePost = (item) => {
  return { type: "REMOVE_POST", payload: item };
};

const searchPost = (keyword) => {
  return { type: "SEARCH_POST", payload: keyword };
};

const sortPost = (keyword) => {
  return { type: "SORT_POST", payload: keyword };
};

const addPost = (item) => {
  return { type: "ADD_POST", payload: item };
};

export { removePost, searchPost, sortPost, addPost };
