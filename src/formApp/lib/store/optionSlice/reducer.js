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
export const editIsCorrect = (state, action) => {
  const { id, SO, prev, value } = action.payload;
  state.data[id].is_right = value;
  if (SO && prev != 0) {
    state.data[prev].is_right = false;
  }
};
