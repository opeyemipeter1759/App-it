import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import Navbar from './Navbar'
import Typewriter from 'typewriter-effect';
 
function HomePage() {
  return (
    <>
      <div className="heading">
        <Navbar/>
        <Link to='/' className="homeLogo">
          <i class="fas fa-3x fa-tachometer-alt"></i>
           <span className="homeLogoText"> <br/> App it</span> 
        </Link>
        <div>
            <p className="landingText">
              <Typewriter
              onInit={(typewriter
              )=>{typewriter
              .typeString('You Can Make a Day.')
              .pauseFor(4000)
              .deleteAll()
              .typeString('You can be Effective.')
              .pauseFor(4000)
              .deleteAll() 
              .typeString('You can Plan it Out!')
              .pauseFor(4000)
              .deleteAll() 
              .typeString('Just App it!...')
              .start()}} />
            </p>
        </div>
        <Link 
              to='/log-in' 
              className="getStarted" 
              >
              Get Started
            </Link>
      </div>



    </>
  )
}

export default HomePage
