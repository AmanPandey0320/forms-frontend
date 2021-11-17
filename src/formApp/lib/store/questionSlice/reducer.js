export const clear = (state, action) => {
  state.data = {};
  state.order = [];
};

/**
 * @description adds question
 * @param {*} state
 * @param {*} action
 */
export const newQuestion = (state, action) => {
  const { question } = action.payload;
  state.data[question.id] = question;
  state.order.push(question.id);
};

/**
 * @description
 * @param {*} state
 * @param {*} action
 */
export const editRequired = (state, action) => {
  const { id, required } = action.payload;
  state.data[id].required = required;
};

/**
 *
 * @param {*} state
 * @param {*} action
 */
export const editTitle = (state, action) => {
  const { id, title } = action.payload;
  state.data[id].title = title;
};

/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export const editWithKeyValue = (state, action) => {
  const { id, key, value } = action.payload;
  state.data[id][key] = value;
};
