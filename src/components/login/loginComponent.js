import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {loginActionCreator} from '../../reducers/auth-reducer';
import {authUserThunkCreator} from '../../reducers/auth-reducer';
import {useTranslation} from 'react-i18next';

function LoginUser(){
    const { t, i18n } = useTranslation();

    const emailRef = React.createRef();
    const passwordRef = React.createRef();
    const rememberMeRef = React.createRef();
    var state = useSelector((state) => state.authPage);
    //console.log(state)/
    const dispatch = useDispatch();
    const onChange = () => {
        dispatch(loginActionCreator(emailRef.current.value, passwordRef.current.value, rememberMeRef.current.checked));
    }

    return(
        <div className="col">
        <form className="login-form"> 
          <p>{t("logInToAccount")} </p>
          <div className="input-wrapper">
            <label htmlFor="email">{t("email")}</label>
            <input type="email" id="email" value={state.user.email} onChange={onChange} ref={emailRef} />
            <b> ошибка</b>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">{t("password")}</label>
            <input type="password" id="password" required value={state.user.password} onChange={onChange} ref={passwordRef}  />
            <b> ошибка</b>
          </div>
          <label className="toggle">
            <input className="toggle-checkbox" type="checkbox" value={state.user.rememberMe} onChange={onChange} ref={rememberMeRef} />
            <div className="toggle-switch"></div>
            <span className="toggle-label">{t("rememberMe")}</span>            
          </label>
  
          <button type="button" id="loginButton" onClick={authUserThunkCreator(state.user.email,state.user.password, state.user.rememberMe)}>{t("EnterBtn")}</button>
          <b> ошибка</b>
        </form>
      </div>
    )
}

export default LoginUser;