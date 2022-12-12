import { configureStore } from "@reduxjs/toolkit";

// Reducer
import infoReducer from "./components/Admin/redux/redux-info/infoReducer";
import dashboardReducer from "./components/Admin/redux/redux-dashboard/dashboardReducer";

export default configureStore({
  reducer: {
    admin_infoReducer: infoReducer,
    admin_dashboardReducer: dashboardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
