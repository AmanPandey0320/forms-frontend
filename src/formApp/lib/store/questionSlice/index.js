import { createSlice } from "@reduxjs/toolkit";
import {
  clear,
  newQuestion,
  editRequired,
  editTitle,
  editWithKeyValue,
} from "./reducer";

const questionSlice = createSlice({
  name: "question",
  initialState: {
    data: {},
    order: [],
  },
  reducers: {
    clear,
    newQuestion,
    editRequired,
    editTitle,
    editWithKeyValue,
  },
});

export const questionAction = questionSlice.actions;
export default questionSlice;
