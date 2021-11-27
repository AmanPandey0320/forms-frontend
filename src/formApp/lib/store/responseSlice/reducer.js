/**
 *
 * @param {*} state
 * @param {*} action
 */
export const init = (state, action) => {
  const { qid, required, type } = action.payload;
  const ans = type === "MO" ? {} : undefined;
  state.data[qid] = {
    ans,
    date: Date.now(),
  };
  state.required[qid] = required;
};

/**
 *
 * @param {*} state
 * @param {*} action
 */
export const edit = (state, action) => {
  const { qid, type, oid, value } = action.payload;
  if (type === "MO") {
    state.data[qid].ans[oid] = value;
  } else {
    state.data[qid].ans = value;
  }
};

/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export const clearOne = (state, action) => {
  const { qid, type } = action.payload;
  const ans = type === "MO" ? {} : undefined;
  state.data[qid].ans = ans;
};
