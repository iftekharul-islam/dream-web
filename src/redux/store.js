// ** Redux Imports
import { configureStore } from "@reduxjs/toolkit";
import data from "./../Pages/redux-store";

const store = configureStore({
  reducer: {data},
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export { store };
