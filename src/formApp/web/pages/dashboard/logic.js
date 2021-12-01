import { formActions } from "../../../lib/store/formSlice";
import store from "../../../lib/store/store";
import { http } from "../../../lib/utils/repository";

const dispatch = store.dispatch;

/**
 *
 * @param {*} tid
 * @param {*} history
 * @param {*} toast
 * @returns
 */
export const createFromTemplate = (tid, history, toast) => (e) => {
  http("/api/form/create-from-template", "POST", { tid })
    .then((res) => {
      const { data, err, messages } = res.data;
      if (err.length > 0) {
        err.forEach((e) => {
          toast(e.code + " : " + e.message, {
            appearance: "error",
          });
        });
        return;
      }
      const { result } = data;
      history.push(`/form-app/form/${result.id}?tab=form`);
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * 
 * @param {*} id 
 * @param {*} history 
 * @param {*} toast 
 */
export const openForm = (id, history, toast) => (e) => {
  history.push(`/form-app/form/${id}?tab=form`);
};
