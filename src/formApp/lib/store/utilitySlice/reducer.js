import { useHistory } from "react-router";

export const initUtil = (state, action) => {
  const { history } = action.payload;
  state.history = history;
};

export const setFormTab = (state, action) => {
  const { tab } = action.payload;
  state.formTab = tab;
};
