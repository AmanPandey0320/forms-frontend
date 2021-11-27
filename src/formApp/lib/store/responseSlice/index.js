import { createSlice } from "@reduxjs/toolkit";
import { init, edit, clearOne } from "./reducer";

const response = createSlice({
  name: "response",
  initialState: {
    data: {},
    required: {},
  },
  reducers: { init, edit, clearOne },
});

export default response;

export const responseActions = response.actions;
