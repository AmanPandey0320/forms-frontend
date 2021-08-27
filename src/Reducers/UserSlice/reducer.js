export const setUser = (state, action) => {
  const { token, name } = action.payload;
  console.log(token,name);
  state.token = token;
  state.name = name;
};
