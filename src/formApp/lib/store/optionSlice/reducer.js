export const clear = (state, action) => {
  state.data = {};
  state.order = [];
};

/**
 * @description adds new option
 * @param {*} state 
 * @param {*} action 
 */
export const newOption = (state, action) => {
  const { option } = action.payload;
  state.data[option.id] = option;
  state.order.push(option.id);
};
