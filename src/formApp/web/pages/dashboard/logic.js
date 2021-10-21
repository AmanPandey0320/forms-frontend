export const createFromTemplate = (tid, history) => (e) => {
  history.push(`/form/${tid}`);
};