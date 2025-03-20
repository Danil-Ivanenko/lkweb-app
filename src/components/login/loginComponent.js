import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {loginActionCreator} from '../../reducers/auth-reducer';
import {authUserThunkCreator} from '../../reducers/auth-reducer';

function LoginUser(){
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
          <p>Вход в аккаунт </p>
          <div className="input-wrapper">
            <label htmlFor="email">Электронная почта</label>
            <input type="email" id="email" value={state.user.email} onChange={onChange} ref={emailRef} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Пароль</label>
            <input type="password" id="password" required value={state.user.password} onChange={onChange} ref={passwordRef}  />
          </div>
          <label className="toggle">
            <input className="toggle-checkbox" type="checkbox" value={state.user.rememberMe} onChange={onChange} ref={rememberMeRef} />
            <div className="toggle-switch"></div>
            <span className="toggle-label">Запомнить меня</span>
          </label>
  
          <button type="button" id="loginButton" onClick={authUserThunkCreator(state.user.email,state.user.password, state.user.rememberMe)}>Войти</button>
        </form>
      </div>
    )
}

export default LoginUser;