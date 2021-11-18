import { createSlice } from "@reduxjs/toolkit";
import {
  clear,
  newSection,
  editTitle,
  editSectionWithKey,
  editQuestionOrder,
} from "./reducer";

const sectionSlice = createSlice({
  name: "section",
  initialState: {
    data: {},
    order: [],
  },
  reducers: {
    clear,
    newSection,
    editTitle,
    editSectionWithKey,
    editQuestionOrder,
  },
});

export const sectionActions = sectionSlice.actions;
export default sectionSlice;
