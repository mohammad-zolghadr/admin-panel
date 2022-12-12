const initialState = {};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_MESSAGES":
      // do sth
      break;
    case "REMOVE_MESSAGE":
      // do sth
      break;
    default:
      return state;
  }
};

export default dashboardReducer;
