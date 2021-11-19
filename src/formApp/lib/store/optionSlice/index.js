import { createSlice } from "@reduxjs/toolkit";
import { clear, newOption, editIsCorrect, editTitle } from "./reducer";

const optionSlice = createSlice({
  name: "option",
  initialState: {
    data: {},
    order: [],
  },
  reducers: {
    clear,
    newOption,
    editIsCorrect,
    editTitle,
  },
});

export const optionAction = optionSlice.actions;
export default optionSlice;
