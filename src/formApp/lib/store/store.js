import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./formSlice";
import userSlice from "./userSlice";
import utilitySlice from "./utilitySlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    form: formSlice.reducer,
    util: utilitySlice.reducer,
  },
});

export default store;
