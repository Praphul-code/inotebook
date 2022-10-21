import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './components/context/notes/NotesStates';
import Alert from './components/Alert';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar /> 
        <Alert message="Please Complete React Course"/>
        <div className='container  bgcolor rounded shadow-lg p-3 mb-5  rounded '>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About/>
            </Route>
            <Route exact path="/login">
            <Login/>
            </Route>
            <Route exact path="/signup">
            <SignUp/>
          </Route> 
        </Switch>
        </div>
      </Router>
      </NoteState>
    </>
  );
}

export default App;