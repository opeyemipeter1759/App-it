import {Switch, Route} from 'react-router-dom';
import HomePage from './Components/Home';
import LogIn from './Components/Log-in';
import SignUp from './Components/Sign-up';

function Routes (){
  return(
    <Switch>
      <Route path='/' exact component={HomePage}/>
      <Route path='/log-in' exact component={LogIn}/>
      <Route path='/Sign-up' exact component={SignUp}/>
    </Switch>
  )
}

export default Routes