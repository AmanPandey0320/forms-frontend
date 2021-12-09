import { formActions } from "../../../lib/store/formSlice";
import { optionAction } from "../../../lib/store/optionSlice";
import { questionAction } from "../../../lib/store/questionSlice";
import { sectionActions } from "../../../lib/store/sectoionSlice";
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
export const openForm = (id, history) => (e) => {
  history.push(`/form-app/form/${id}?tab=form`);
};

/**
 * 
 * @returns Promise
 */
export const createNewFormCall = () => {
  return new Promise((resolve, reject) => {
    dispatch(optionAction.clear());
    dispatch(questionAction.clear());
    dispatch(sectionActions.clear());
    dispatch(formActions.clear());
    const formData = {};
    http("/api/form/save-action", "POST", { formData })
      .then((res) => {
        console.log("new save form acion res ----->", res);
        const { data, err, messages } = res.data;
        if (err?.length > 0) {
          reject(err);
          return;
        }
        resolve(data?.result);
        return;
      })
      .catch((err) => {
        reject([err]);
        console.log("new save form acion err----->", err);
        return;
      })
      .finally(() => {
        console.log("new form finally done");
      });
  });
};
