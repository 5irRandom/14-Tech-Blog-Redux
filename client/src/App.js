import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from './components/Navbar';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import Post  from './pages/Post';
import Dashboard from "./pages/Dashboard";


let id = sessionStorage.getItem('id');
let loggedin;
if (id) {
  loggedin = true;
} else {
  loggedin = false;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar loggedin={loggedin} />
          <Switch>
            <Route exact path={["/"]}>
              <Dashboard />
            </Route>
            <Route exact path={["/signin"]}>
              <SignIn />
            </Route>
            <Route exact path={["/signup"]}>
              <SignUp />
            </Route>
            <Route path={["/post/:id"]}>
              <Post />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

// Dashboard redirects to login if not logged in
// Phrasing on data flow
export default App;
