import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../utils/routes';

const SignIn = () => {
  return ( 
    <div>
      <h1>Страница Логина</h1>
      <Link to={Routes.SignUpRote}>
        <span >Зарегестрироваться</span>
      </Link>
    </div>
  )
}

export default SignIn;
