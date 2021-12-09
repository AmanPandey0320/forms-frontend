const { createSlice } = require("@reduxjs/toolkit");
const {
  newForm,
  editDescription,
  editTitle,
  editTheme,
  clear,
} = require("./reducer");

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
    editTheme,
    clear,
  },
});

export const formActions = formSlice.actions;
export default formSlice;
