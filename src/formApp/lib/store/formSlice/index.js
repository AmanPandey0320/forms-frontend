const { createSlice } = require("@reduxjs/toolkit");
const { newForm, editDescription, editTitle } = require("./reducer");

const formSlice = createSlice({
  name: "form",
  initialState: {
    data: {},
    order: [],
  },
  reducers: {
    newForm,
    editDescription,
    editTitle,
  },
});

export const formActions = formSlice.actions;
export default formSlice;
