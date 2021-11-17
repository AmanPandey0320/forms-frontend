import { createSlice } from "@reduxjs/toolkit";
import { clear, newOption } from "./reducer";

const optionSlice = createSlice({
  name: "option",
  initialState: {
    data: {},
    order: [],
  },
  reducers: {
    clear,
    newOption,
  },
});

export const optionAction = optionSlice.actions;
export default optionSlice;
