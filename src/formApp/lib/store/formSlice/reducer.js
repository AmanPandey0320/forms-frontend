import formEntity from "./entity";
import { v4 } from "uuid";

/**
 * @description reducer to add new form
 * @param {*} state
 * @param {*} action
 */
export const newForm = (state, action) => {
  const { form } = action.payload;
  state.data = form;
};
