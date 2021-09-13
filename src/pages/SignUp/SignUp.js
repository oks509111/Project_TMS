import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../utils/routes';

const SignUp = () => {
  return (
    <div>
      <h1>Страница Регистрации</h1>
      <Link to={Routes.SignInRote}>
        <span>Назад</span>
      </Link>
    </div>
  )
}

export default SignUp;
