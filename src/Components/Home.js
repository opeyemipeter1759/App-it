import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import Typewriter from 'typewriter-effect';
 
function HomePage() {
  return (
    <>
      <div className="heading">
        <div>
            <p className="landingText">
              <Typewriter
              onInit={(typewriter
              )=>{typewriter
              .typeString('You Can Make Your Day Count...')
              .pauseFor(4000)
              .deleteAll()
              .typeString('You can be Effective and  Productive...')
              .pauseFor(4000)
              .deleteAll() 
              .typeString('Just Plan it Out!...')
              .start()}} />
            </p>

            <Link 
              to='/log-in' 
              className="getStarted" 
              >
              Get Started
            </Link>
        </div>
      </div>



    </>
  )
}

export default HomePage
