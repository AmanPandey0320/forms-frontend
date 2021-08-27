import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./FormSlice";
import userSlice from "./UserSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    form: formSlice.reducer,
  },
});

export default store;
