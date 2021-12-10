export const clear = (state, action) => {
  state.data = {};
  state.order = [];
};

/**
 * @description adds new section
 * @param {*} state
 * @param {*} action
 */
export const newSection = (state, action) => {
  const { section } = action.payload;
  state.order.push(section.id);
  state.data[section.id] = section;
};

/**
 * @description edits title of a section
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
export const editSectionWithKey = (state, action) => {
  const { id, key, value } = action.payload;
  state.data[id][key] = value;
};

/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export const editQuestionOrder = (state, action) => {
  const { id, questions } = action.payload;
  state.data[id].questions = questions;
};
