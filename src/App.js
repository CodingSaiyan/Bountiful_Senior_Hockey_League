import React from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';


import {Switch, Route, withRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <h1>App COmponent</h1>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/home' component={Home} />
        </Switch>
    </div>
  );
}

export default withRouter(App);
