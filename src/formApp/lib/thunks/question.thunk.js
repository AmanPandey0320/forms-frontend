import store from "../store/store";
import { http } from "../utils/repository";

export const saveQuestion = (id) => {
  return (dispatch) => {
    const state = store.getState();
    const formData = state.question.data[id];
    http("/api/question/save-action", "POST", { formData })
      .then((res) => {
        console.log("question save thunk----->", res);
      })
      .catch((err) => {
        console.log("error---->", err);
      });
  };
};
