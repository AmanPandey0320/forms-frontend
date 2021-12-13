export const openAttachment = (name, newtab) => (e) => {
  if (Boolean(name) === false) {
    return;
  }
  const baseUrl = process.env.REACT_APP_backend_api_url;
  const _url = `${baseUrl}/api/storage/download/${name}`;
  if (newtab) {
    window.open(_url, "_blank").focus();
  } else {
    window.location = _url;
  }
};
