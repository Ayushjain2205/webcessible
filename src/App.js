import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Website from "./components/pages/Website";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <main>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/website' component={Website} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
