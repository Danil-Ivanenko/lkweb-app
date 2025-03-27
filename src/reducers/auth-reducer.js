import { lkApi } from '../Api/lkApi';
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_FAILURE = 'LOGIN_FAILURE';

let initialState = {
    user: {
        email : '',
        password : '',
        rememberMe : null
    }     ,
    error: {
        emailError : '',
        passwordError : '',
        loginFailure  : ''
    }
  };

  const authReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type){
        case LOGIN_REQUEST:
            newState.user = {email : action.email , password : action.password, rememberMe: action.rememberMe}
            return newState
        case LOGIN_FAILURE:
            newState.error = {emailError: action.emailError, passwordError: action.passwordError,loginFailure: action.loginFailure }
            return newState
        default:
            return newState;
    }
};


export function authUserThunkCreator(email, password, rememberMe) {
    return async (dispatch) => { 
      try {
        const data = await lkApi.login(email, password, rememberMe); 
        if (data.loginSucceeded === true) {

        } 
        else if (data.loginSucceeded === false) {
            console.log(data)
            dispatch(loginFailureActionCreator("","","Login failure"));

        } 
        else if(data.status === 400) 
        {
            const emailError = data.errors.Email?.[0] || ""; 
            const passwordError = data.errors.Password?.[0] || "";

            dispatch(loginFailureActionCreator(emailError, passwordError,""))
        }
    

      } catch (error) {

      }
    };
  }


export function loginActionCreator(email, password,rememberMe){
    return {type: LOGIN_REQUEST, email : email , password : password, rememberMe: rememberMe};
}

export function loginFailureActionCreator(emailError ,passwordError ,loginFailure){
    return {type: LOGIN_FAILURE, emailError:emailError, passwordError:passwordError, loginFailure:loginFailure};
}

export default authReducer;