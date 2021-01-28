import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Tanks from './pages/Tanks';

import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-5L7D3XR'
};

TagManager.initialize(tagManagerArgs);

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
