import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {Grid, Paper,TextField, Button} from '@material-ui/core';
import  {connect} from 'react-redux';
import * as actions from '../redux/auth/auth.actions'
import Loading from './loading'
import Notifications from './notification'
import './Log-in.css'

function LogIn(props) {
  const paperStyle={padding:20, height: '80vh', width:500, margin: '20px auto',}
  const [state, setState] = useState({ username: "", password: "" });
  const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
  };
  
	const handleLogin = (e) => {
		e.preventDefault();
    props.onAuth(state.username, state.password);
  };
  
  const {loginError, loading } = props;

  return (
    <div>
          {
            loading === true?(
                <div className="isLoading">
                  <Loading/>
                </div>
            ) :
          (
              <Grid align='center' className="gridBgC" >   
            <h1 className="logIn" align="center">
              Log In
            </h1> 
            {loginError && (
              <Notifications message={`${loginError}`} variant='danger'/>
            )}
          <Paper elevation={10} style ={paperStyle}>
              <Link
                className="backHome"
                  to='/'
                  >
                <i className="fas fa-1.5x fa-arrow-left"></i>
                  </Link>

                <div 
                  className="LoginLogo">
                    <i className="mb-2 fas fa-2x fa-tachometer-alt">
                    
                    </i>
                    <span className="LoginLogoText"> <br/> App-it</span> 
                  </div>

                  <form onSubmit={handleLogin}>

                  <TextField
                  name="username"
                  value={state.username}
                  onChange={handleChange}
                  className="emailInput" 
                  label='Username or Email' 
                  placeholder='Enter Username or Email' 
                  type='text'
                  fullWidth 
                  autoComplete= 'current-password'
                  required
                  />
                  <TextField
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                  className="PasswordInput"  
                  label = 'Password' 
                  placeholder ='Password' 
                  type="password"  
                  fullWidth 
                  autoComplete='current-password'
                  required/>
                  <div 
                  className="loginbtns">    
                  <Button 
                  className="loginBtnColor" 
                  type='submit' 
                  >
                    Log In 
                  </Button>
                  </div>
                  </form>
                  <div>
                    <Button
                  className="GoogleLoginBtnColor" 
                  type='submit'>
                    Continue with Google
                  </Button>
                  
                  </div>
                <div className="mt-4">
        <Grid container mt={4}>
            <Grid item xs>
                    <Link
                        className="links"
                    >
                      Forgot password?
                    </Link>
                </Grid>
            <Grid item>

                    <Link 
                      to='/sign-up' 
                      variant="body2"
                        className="links"
                      >
                      {"Don't have an account? Sign Up"}
                    </Link>
                    </Grid>
        </Grid>    
                </div>

                </Paper>

      </Grid>
            )
          }
      
    </div>

  )
}

const mapStateToProps = (state) => {
	return {
		isLoading: state.loading,
		loginError: state.error,
		redirect: state.redirect,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAuth: (username, password) =>
			dispatch(actions.authLogin(username, password)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps) (LogIn);


