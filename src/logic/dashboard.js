export const handleFade = (uiHandler,state) => (e) => {
    document.getElementById('my-fade').style.display=(state?'none':'block');
    uiHandler(!state);
}