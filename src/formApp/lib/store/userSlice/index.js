import { createSlice } from "@reduxjs/toolkit";
import { setUser } from "./reducer";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    name: `New User`,
  },
  reducers: {
    setUser,
  },
});

export const userActions = userSlice.actions;
export default userSlice;
