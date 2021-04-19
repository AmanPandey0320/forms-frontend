const initState = {
    token:null,
    name:`New User`
}

const userReducer = (state = initState,action)=>{
    const { type } = action;
    // console.log(action);
    if(type === 'USER_LOGIN'){
        const {token,name} = action;
        state = {
            ...initState,
            name:name,
            token:token
        }
    }
    // console.log(state);
    return state;
}

export default userReducer;