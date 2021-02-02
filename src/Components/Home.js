import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
function HomePage() {
  return (
    <>
      <div className="heading">
        <div >
            <p className="landingText">
              Plan it Out!.
            </p>
            <Link 
              to='/sign-up' 
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
