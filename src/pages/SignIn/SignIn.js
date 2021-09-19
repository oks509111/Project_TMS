import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './SignIn.css';


import { Routes } from '../../utils/routes';


  const SignIn = () => {
    const [loginForm, setLoginForm] = useState ({ loginValue: '', passwordValue: '' }) 
    const [loginFormError, setLoginFormError] = useState ({ loginError: '', passwordError: '' }) 

    const handleCheckemptyInput = (loginForm, loginFormError, inputName, errorName) => {
      if (loginForm[inputName] === '') {
        loginFormError [errorName] = 'empty'
        return true
      }  
      return false 
    }

    const handleCheckEmptyForm = (event = {}, inputName = '', errorName = '') => {
    const loginFormCopy ={...loginForm}
    const loginFormErrorCopy ={...loginFormError}
    let resultCheckEmpty = false;
    let resultCheckEmptyLogin = false;
    let resultCheckEmptyPassword = false;

      if (inputName !== '' && errorName !== '') {
         
        resultCheckEmpty = handleCheckemptyInput (loginFormCopy, loginFormErrorCopy, inputName, errorName)
        setLoginFormError(loginFormErrorCopy)
      
      } else {

        resultCheckEmptyLogin = handleCheckemptyInput (loginFormCopy, loginFormErrorCopy, 'loginValue', 'loginError')
        resultCheckEmptyPassword = handleCheckemptyInput (loginFormCopy, loginFormErrorCopy, 'passwordValue', 'passwordError')
        resultCheckEmpty = resultCheckEmptyLogin || resultCheckEmptyPassword


        setLoginFormError(loginFormErrorCopy)
      }
      return   resultCheckEmpty;  
     }

     

    const hadndleChangeLoginForm = (event, inputName, errorName) => {
      const {value: inputValue} = event.target
      const loginFormCopy = {...loginForm}
      const loginFormErrorCopy ={...loginFormError}

      loginFormErrorCopy [errorName] = ''
      setLoginFormError(loginFormErrorCopy)
      
      loginFormCopy [inputName] = inputValue
      setLoginForm (loginFormCopy) 
    }
      const handleSubmitForm = (event) => {
        event.preventDefault()
        if (
        handleCheckEmptyForm() 
        ) {
          return
        }  
      }

      const {loginValue, passwordValue} = loginForm
      const {loginError, passwordError} = loginFormError
  
  return(
     
      <div className = 'container'>
      <div className ='login-wrapper'>
      <h1>Please Sign In</h1>
      <form onSubmit= {handleSubmitForm}>

        <label>
          <input className ='username_itm' 
          type = 'text'
          placeholder = 'Urername or Email'
          name = 'loginValue'
          value = {loginValue}
          onChange = {event => hadndleChangeLoginForm (event, 'loginValue', 'loginError')}
          onBlur = {event => handleCheckEmptyForm (event, 'loginValue', 'loginError')}/>
       
        </label>
        <div className = 'span_list'>
        {loginError === 'empty' && <span>Введите логин</span>}
        {loginError === 'notValid' && <span>Неверный логин</span>}
        {loginError === 'notExists' && <span>Пользователь с таким логином не существует</span>}
        </div>

        <label>
          <input className ='username_itm' 
          type = 'password'
          placeholder = 'Password'
          name = 'passwordValue'
          value = {passwordValue}
          onChange = {event => hadndleChangeLoginForm (event, 'passwordValue', 'passwordError')}
          onBlur = {event => handleCheckEmptyForm (event, 'passwordValue', 'passwordError')}/>
        </label>
        <div className = 'span_list'>
        {passwordError === 'empty' && <span>Введите пароль</span>}
        {passwordError === 'notExists' && <span>Неверный пароль</span>}
        </div>

        <div>
          <button className = 'button_itm' type='submit'>SIGN IN</button>
        </div>
        <Link to={Routes.SignUpRote}>
          <span >SignUp</span>
        </Link>
      </form>
    </div>
    </div>
    
    )
}
export default SignIn
