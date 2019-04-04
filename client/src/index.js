import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/Login';
import Timeline from './components/Timeline';
import './css/timeline.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Login} />
    <Route path="/timeline" component={Timeline} />
  </Router>
  ,
  document.getElementById('root'));

serviceWorker.unregister();
