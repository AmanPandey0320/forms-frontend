import { createSlice } from "@reduxjs/toolkit";
import { initUtil, setFormTab } from "./reducer";

const utilitySlice = createSlice({
  name: "util",
  initialState: {
    history: null,
    formTab: "form",
  },
  reducers: {
    initUtil,
    setFormTab,
  },
});

export default utilitySlice;
export const utilActions = utilitySlice.actions;
