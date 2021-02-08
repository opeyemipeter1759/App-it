import React from 'react';
import {Grid, Paper,TextField, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './Sign-up.css'



export default function SignUp() {
  const paperStyle={padding:20, height: '85vh', width:500, margin: '20px auto',}
  return (
      <Grid align='center' className="gridBgC" >   
        <h1 className="signUp">
          Sign up
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
      <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                name="username"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid> */}
          <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
          </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="Confirm Password"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <div className="signupbtns">
          <Button className="signupBtnColor"
            type="submit"
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
           <Button
            className="GooglesignupBtnColor"
            type="submit"
            variant="contained"
            color="primary"
            >
          sign-up with Google
          </Button>
              </div>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/log-in">
        
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
                </Paper>
            </Grid>
  
    
  );
}