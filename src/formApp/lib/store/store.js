import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./formSlice";
import optionSlice from "./optionSlice";
import questionSlice from "./questionSlice";
import responseSlice from "./responseSlice";
import sectionSlice from "./sectoionSlice";
import userSlice from "./userSlice";
import utilitySlice from "./utilitySlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    form: formSlice.reducer,
    section: sectionSlice.reducer,
    question: questionSlice.reducer,
    option: optionSlice.reducer,
    util: utilitySlice.reducer,
    response: responseSlice.reducer,
  },
});

export default store;
