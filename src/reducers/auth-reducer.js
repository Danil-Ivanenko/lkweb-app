import { lkApi } from '../Api/lkApi';
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_FAILURE = 'LOGIN_FAILURE';

let initialState = {
    user: {
        email : '',
        password : '',
        rememberMe : null
    }     ,
    error : false
  };

  const authReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type){
        case LOGIN_REQUEST:
            newState.user = {email : action.email , password : action.password, rememberMe: action.rememberMe}
            return newState
        case LOGIN_FAILURE:
            newState.error = true
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

export function loginFailureActionCreator(){
    return {type: LOGIN_FAILURE};
}

export default authReducer;