import React from 'react';

import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importing Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Work from './Pages/Work';
import Contact from './Pages/Contact';
import Error from './Pages/Error';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Work" component={Work} />
          <Route path="/Contact" component={Contact} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
