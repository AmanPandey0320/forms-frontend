import { createSlice } from "@reduxjs/toolkit";
import { clear, newQuestion } from "./reducer";

const questionSlice = createSlice({
  name: "question",
  initialState: {
    data: {},
    order: [],
  },
  reducers: {
    clear,
    newQuestion,
  },
});

export const questionAction = questionSlice.actions;
export default questionSlice;
