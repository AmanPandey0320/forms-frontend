import { questionAction } from "../../../../lib/store/questionSlice";
import store from "../../../../lib/store/store";

const dispatch = store.dispatch;

/**
 * @description
 * @param {*} id
 * @returns
 */
export const requiredBtnClickHandler = (id) => (e) => {
  const required = e.target.checked;
  dispatch(questionAction.editRequired({ id, required }));
};

/**
 * @description
 * @param {*} id
 * @returns
 */
export const titleTextChangeListner = (id) => (e) => {
  const title = e.target.value;
  dispatch(questionAction.editTitle({ id, title }));
};

export const typeChangeHandler = (id, key) => (e) => {
  const value = e.target.value;
  dispatch(questionAction.editWithKeyValue({ id, key, value }));
};
