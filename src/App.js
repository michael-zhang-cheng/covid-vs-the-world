import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Poster from './components/Poster';
import Overlay from './components/Overlay';
import Popup from './components/Popup';

import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Poster />
        </Route>
        <Route path="/popup">
          <Poster>
            <div>
              <Overlay />
              <Popup />
            </div>
          </Poster>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
