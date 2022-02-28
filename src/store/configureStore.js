import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import reducer from "./reducer";
import storage from "redux-persist/lib/storage";
import check from "./middleware/check";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [check],
});

const Persistor = persistStore(store);

export { Persistor };
export default store;
