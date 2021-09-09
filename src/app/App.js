import React from 'react';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import SignIg from '../pages/SignIg/SignIg';
import SignUp from '../pages/SignUp/SignUp';
import Tascs from '../pages/Tasks/Tasks';
import Users from '../pages/Users/Users';
/*import Navigation from "../components/navigation/Navigation";*/

class App extends React.Component {

  render(){
   
    return(
      
      <Router>
        <Route path = '/'>
          {/*<Navigation/>*/}
        </Route>

        <Route exact path = '/signIg'>
        <SignIg/>
        </Route>

        <Route exact path = '/signUp'>
        <SignUp/>
        </Route>

        <Route exact path = '/tascs'>
        <Tascs/>
        </Route>
        
        <Route exact path = '/users'>
        <Users/>
        </Route>

      </Router>
    )  
  }
}
 export default App;