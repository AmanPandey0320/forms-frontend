import { useHistory } from "react-router";

export const initUtil = (state, action) => {
  const { history } = action.payload;
  console.log("slice-->", history);
  state.history = history;
};
