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
