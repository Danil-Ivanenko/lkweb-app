import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {loginActionCreator, loginFailureActionCreator} from '../../reducers/auth-reducer';
import {authUserThunkCreator} from '../../reducers/auth-reducer';
import {useTranslation} from 'react-i18next';
import styles from '../../csses/login.module.css'
function LoginUser(){
    const { t, i18n } = useTranslation();

    const emailRef = React.createRef();
    const passwordRef = React.createRef();
    const rememberMeRef = React.createRef();
    var state = useSelector((state) => state.authPage);
    console.log(state)
    const dispatch = useDispatch();
    const onChange = () => {
        dispatch(loginActionCreator(emailRef.current.value, passwordRef.current.value, rememberMeRef.current.checked));
        dispatch(loginFailureActionCreator("","",""));
    }
    console.log(state)
    return(
        <div className={styles.col}>
        <form className={styles['login-form']}> 
          <p>{t("logInToAccount")} </p>
          <div className={styles['input-wrapper']}>
            <label htmlFor="email">{t("email")}</label>
            <input type="email" id="email" value={state.user.email} onChange={onChange} ref={emailRef} />
            <b  className={styles['error']}> {state.error.emailError}</b>
          </div>
          <div className={styles['input-wrapper']}>
            <label htmlFor="password">{t("password")}</label>
            <input type="password" id="password" required value={state.user.password} onChange={onChange} ref={passwordRef}  />
            <b className={styles['error']}> {state.error.passwordError}</b>
          </div>
          <label className={styles.toggle}>
            <input className={styles['toggle-checkbox']} type="checkbox" value={state.user.rememberMe} onChange={onChange} ref={rememberMeRef} />
            <div className={styles['toggle-switch']}></div>
            <span className={styles['toggle-label']}>{t("rememberMe")}</span>            
          </label>
  
          <button  className={styles.button} type="button" id="loginButton" onClick={() => dispatch(authUserThunkCreator(state.user.email,state.user.password, state.user.rememberMe))}>{t("EnterBtn")}</button>
          <b className={styles['error']}> {state.error.loginFailure}</b>
        </form>
      </div>
    )
}

export default LoginUser;