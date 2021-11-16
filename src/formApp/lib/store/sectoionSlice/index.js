import { createSlice } from "@reduxjs/toolkit";
import { clear, newSection, editTitle, editSectionWithKey } from "./reducer";

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
  },
});

export const sectionActions = sectionSlice.actions;
export default sectionSlice;
