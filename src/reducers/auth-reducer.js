import { lkApi } from '../Api/lkApi';
const LOGIN_REQUEST = 'LOGIN_REQUEST';

let initialState = {
    user: {
        email : '',
        password : '',
        rememberMe : null
    }     
  };

  const authReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type){
        case LOGIN_REQUEST:
            newState.user = {email : action.email , password : action.password, rememberMe: action.rememberMe}
            return newState
        default:
            return newState;
    }
};

export function authUserThunkCreator(email, password, rememberMe){

    // return (dispatch) => {
    //     lkApi.login(email, password, rememberMe).then(data =>{
    //         dispatch(loadNewsActionCreator(data));
    //     })
    // }
    return () => {
        lkApi.login(email, password, rememberMe).then(data =>{
            console.log(data);
        })
    }
}


export function loginActionCreator(email, password,rememberMe){
    return {type: LOGIN_REQUEST, email : email , password : password, rememberMe: rememberMe};
}
export default authReducer;