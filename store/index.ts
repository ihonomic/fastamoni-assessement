import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

import { userSlice } from "./userSlice";

const reducers = combineReducers({
  user: userSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  timeout: 9000000000,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  //   devTools: window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
  middleware: [thunk],
});

let persistor = persistStore(store);

export { store, persistor };
