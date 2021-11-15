import store from "../store/store";
import { http } from "../utils/repository";

/**
 * @description saves the form
 * @returns
 */
export const saveForm = () => {
  return (dispatch) => {
    const state = store.getState();
    const formData = state.form.data;
    http("/api/form/save-action", "POST", { formData })
      .then((res) => {
        console.log("save form acion ----->", res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };
};
