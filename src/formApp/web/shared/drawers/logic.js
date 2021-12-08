import { formActions } from "../../../lib/store/formSlice";
import store from "../../../lib/store/store";

const dispatch = store.dispatch;

/**
 * 
 * @param {*} key 
 * @param {*} value 
 * @returns 
 */
export const editHeader = (key, value) => (e) => {
  dispatch(formActions.editTheme({ value, key }));
};
