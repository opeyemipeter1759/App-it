import React from 'react'
import {Link} from 'react-router-dom'
import {Grid, Paper,TextField, Button} from '@material-ui/core';
import './Log-in.css'

function LogIn() {
  const paperStyle={padding:20, height: '80vh', width:500, margin: '20px auto',}

  return (
    <div >

      <Grid align='center' className="gridBgC" >   
            <h1 className="logIn" align="center">
              Log In
            </h1> 
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
                  <TextField
                  className="emailInput" 
                  label='Username or Email' 
                  placeholder='Enter Username or Email' 
                  fullWidth 
                  required
                  />
                  <TextField 
                  className="PasswordInput"  
                  label = 'Password' 
                  placeholder ='Password' 
                  type="password"  
                  fullWidth 
                  required/>
                  <div 
                  className="loginbtns">    
                  <Button 
                  className="loginBtnColor" 
                  type='submit'>
                    Log In 
                  </Button>
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
    </div>

  )
}

export default LogIn;


            // <Grid item xs>
            //   <Link href="#" variant="body2">
            //     Forgot password?
            //   </Link>
            // </Grid>
            // <Grid item>
            //   <Link href="#" variant="body2">
            //     {"Don't have an account? Sign Up"}
            //   </Link>
            // </Grid>