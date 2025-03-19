// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./reducers/authReducers"; 

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ serializableCheck: false }),
//   devTools: process.env.NODE_ENV !== "production",
// });

// export default store;


import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import { persistReducer, persistStore } from "redux-persist";
import authReducer from "./reducers/authReducers"; 
import dashboardHexagonChartReducer from './reducers/dashboardHexagonChartReducer';

// Persist config
const persistConfig = {
  key: "root",
  storage,
};

// Apply persistReducer to authReducer
const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedChartReducer = persistReducer(persistConfig, dashboardHexagonChartReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    chart:persistedChartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store); // Create persistor
export default store;
