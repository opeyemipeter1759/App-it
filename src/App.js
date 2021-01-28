import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import * as actions from './redux/todos/todos.action.js'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


// const mapStateToProps = state=>{
//   return{
//     isloading: state.loading
//   }
// }
const mapDispatchToProps = (dispatch)=>{
  return {
    fetchTodos: ()=> dispatch(actions.fetchTodos())
  }
}

export default connect(null, mapDispatchToProps )(App);
