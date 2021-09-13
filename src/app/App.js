import React from 'react';

import {BrowserRouter as Router, Route} from "react-router-dom";

import { Routes } from '../utils/routes';
//import {AuthorizeRoute, NotAuthorizeRoute} from '../components/routes';
import { Navigation } from '../components';

import {Home, SignIn, SignUp, Tasks, Users } from '../pages';


const App = () => {


  return(
    
    <Router>
      
      {/*<NotAuthorizeRoute  path = {Routes.SignInRote} component = {SignIn}/>*/}
      <Route exact path={Routes.HomeRote}>
				<Home />
			</Route>

    <Route exact path={Routes.SignInRote}>
      <SignIn />
    </Route>

      {/*<NotAuthorizeRoute path = {Routes.SignUpRote} component = {SignUp}/>*/}
      <Route exact path={Routes.SignUpRote}>
      <SignUp />
    </Route>

      {/*<AuthorizeRoute  path = {Routes.TasksRote} component = {Tasks}/>*/}
    <Route exact path={Routes.TasksRote}>
      <Navigation />
      <Tasks />
    </Route>
      {/* <AuthorizeRoute  path = {Routes.UsersRote} component ={Users}/>*/}
      <Route exact path={Routes.UsersRote}>
      <Navigation />
      <Users />
    </Route>

    </Router>
    )  
}
 export default App;