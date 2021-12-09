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
/**
 * @description reducer to edit the title the form
 * @param {*} state
 * @param {*} action
 */
export const editTitle = (state, action) => {
  const { title } = action.payload;
  state.data.title = title;
};
/**
 * @description reducer to edit the description of the form
 * @param {*} state
 * @param {*} action
 */
export const editDescription = (state, action) => {
  const { description } = action.payload;
  state.data.description = description;
};

/**
 *
 * @param {*} state
 * @param {*} action
 */
export const editTheme = (state, action) => {
  const { key, value } = action.payload;
  state.data.theme[key] = value;
};

/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export const clear = (state,action) => {
  state.data = {};
  state.order = [];
}
