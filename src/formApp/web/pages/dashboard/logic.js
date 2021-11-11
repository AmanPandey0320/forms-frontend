export const createFromTemplate = (tid, history) => (e) => {
  console.log("clicled")
  history.push(`/form-app/form/${tid}`);
};
