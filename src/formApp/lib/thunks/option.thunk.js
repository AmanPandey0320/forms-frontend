import store from "../store/store";
import { http } from "../utils/repository";

export const saveOption = (id, toast) => {
  return (dispatch) => {
    const state = store.getState();
    const formData = state.option.data[id];
    http("/api/option/save-action", "POST", { formData })
      .then((res) => {
        console.log("option save res----->", res);
      })
      .catch((err) => {
        console.log("op thunk err---->", err);
      });
  };
};
