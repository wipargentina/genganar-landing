import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Tanks from './pages/Tanks';
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/tanks'>Tanks</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/tanks'>
            <Tanks />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
