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
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <>
    <NoteState>
      <Router>
        <Navbar /> 
        <Alert alert={alert}/>
        <div className='container  bgcolor rounded shadow-lg p-3 mb-5  rounded '>
        <Switch>
          <Route exact path="/">
            <Home showAlert={showAlert} />
          </Route>
          <Route exact path="/about">
            <About/>
            </Route>
            <Route exact path="/login">
            <Login showAlert={showAlert}/>
            </Route>
            <Route exact path="/signup">
            <SignUp showAlert={showAlert} />
          </Route> 
        </Switch>
        </div>
      </Router>
      </NoteState>
    </>
  );
}

export default App;