import React from 'react'
import {Link} from 'react-router-dom'
import {Grid, Paper,TextField, Button} from '@material-ui/core'
import './Log-in.css'

function LogIn() {
  const paperStyle={padding:20, height: '70vh', width:500, margin: '20px auto',}

  return (
    <>
    
     
      <Grid align='center'>   
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

                </Paper>

      </Grid>
    </>
  )
}

export default LogIn
