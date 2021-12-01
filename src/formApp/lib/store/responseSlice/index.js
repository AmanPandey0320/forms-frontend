import { createSlice } from "@reduxjs/toolkit";
import { init, edit, clearOne, save, saveResponse } from "./reducer";

const response = createSlice({
  name: "response",
  initialState: {
    data: {},
    required: {},
    allResponse: {},
    sentForm: {},
    allUid:[]
  },
  reducers: { init, edit, clearOne, save, saveResponse },
});

export default response;

export const responseActions = response.actions;
