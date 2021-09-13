import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Routes } from '../../utils/routes';

const Home = () => {

  const history = useHistory()

  useEffect(() => {
    history.push(Routes.SignInRote)
  }, [])

  return <h1>Домашняя страница</h1>
}

export default Home;