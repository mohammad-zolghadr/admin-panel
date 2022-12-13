import { configureStore } from "@reduxjs/toolkit";

// Reducer
import infoReducer from "./components/Admin/redux/redux-info/infoReducer";
import dashboardReducer from "./components/Admin/redux/redux-dashboard/dashboardReducer";
import postReducer from "./components/Admin/redux/redux-post/postReducer";

export default configureStore({
  reducer: {
    admin_infoReducer: infoReducer,
    admin_dashboardReducer: dashboardReducer,
    admin_postReducer: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
