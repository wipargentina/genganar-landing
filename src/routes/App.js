import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../component/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Tanks from '../pages/Tanks';

import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-KN2HC78'
};

TagManager.initialize(tagManagerArgs);

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/gracias'>
            <Tanks />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
