import { createSlice } from "@reduxjs/toolkit";
import { initUtil } from "./reducer";

const utilitySlice = createSlice({
  name: "util",
  initialState: {
    history: null,
  },
  reducers: {
    initUtil,
  },
});

export default utilitySlice;
export const utilActions = utilitySlice.actions;
