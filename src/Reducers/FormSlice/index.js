const { createSlice } = require("@reduxjs/toolkit");
const { newForm } = require("./reducer");

const formSlice = createSlice({
  name: "form",
  initialState: {
    data: {},
    order: [],
  },
  reducers: {
    newForm,
  },
});

export const formActions = formSlice.actions;
export default formSlice;
