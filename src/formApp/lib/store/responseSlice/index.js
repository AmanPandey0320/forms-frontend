import { createSlice } from "@reduxjs/toolkit";
import { init, edit, clearOne, save } from "./reducer";

const response = createSlice({
  name: "response",
  initialState: {
    data: {},
    required: {},
  },
  reducers: { init, edit, clearOne, save },
});

export default response;

export const responseActions = response.actions;
