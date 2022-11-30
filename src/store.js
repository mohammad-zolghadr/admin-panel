import { configureStore } from "@reduxjs/toolkit";

// Reducer
import infoReducer from "./components/Admin/redux/redux-info/infoReducer";

export default configureStore({
  reducer: { admin_infoReducer: infoReducer },
});
