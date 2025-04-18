
import './App.scss';
import Nav from './components/Navigation/Nav';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Register from './components/register/register';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My React App</h1>
          <Nav />
          <Switch>
            <Route path="/news">
              home
            </Route>
            <Route path="/about">
              News
            </Route>
            <Route path="/contact">
              contact
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/" exact>
              home
            </Route>
            <Route path="*">
              <h2>404 Not Found</h2>
            </Route>
          </Switch>
        </header>
      </div>

    </Router>
  );
}

export default App;
