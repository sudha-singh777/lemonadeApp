
import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import lemonade from './component/lemonade';

class App extends Component {
  render(){
    return (
      <div className="App">
      <Router>
          <Switch>
          <Route path="/" exact component={lemonade}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
