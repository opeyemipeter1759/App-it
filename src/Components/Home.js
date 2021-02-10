import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import * as TodoActions from '../redux/todos/todos.action'; 
import {connect} from 'react-redux';
import Navbar from './Navbar'
import Typewriter from 'typewriter-effect';
 
function HomePage(props) {
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
              to='/sign-up' 
              className="getStarted"
              onClick={props.todos}
              >
              Get Started
            </Link>

      </div>
    </>
  )
}

const mapStateToProps = (state)=>{
  return {
    todos: state.todos
  }

}

const mapDispatchToProps=(dispatch)=>{
  return{
    todos: () => dispatch(TodoActions.fetchTodos())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
