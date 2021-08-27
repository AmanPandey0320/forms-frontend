import formEntity from "./entity";
import { v4 } from "uuid";

/**
 * @description reducer to add new form
 * @param {*} state 
 * @param {*} action 
 */
export const newForm = (state, action) => {
  const id = v4();
  const form = new formEntity(id);
  state.data[id] = form;
  state.order.push(id);
};
