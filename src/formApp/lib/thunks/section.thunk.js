import store from "../store/store";
import { http } from "../utils/repository";

/**
 * 
 * @param {*} sid 
 * @returns 
 */
export const saveSection = (sid) => {
  return (dispatch) => {
    const state = store.getState();
    const section = state.section.data[sid];
    http("/api/section/save-action", "POST", section)
      .then((res) => {
        console.log("save section thunk ----->", res);
      })
      .catch((err) => {
        console.log("save section thunk err----->", err);
      });
  };
};
