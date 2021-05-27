/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './app.module.css';
import Header from './header';
import Login from './login';
import DecisionList from './decision/list';
import Landing from './decision/landing';
import DecisionDetail from './decision/detail';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.body}>
          <Route path='/' component={Header} />
          <main className={styles.main__container}>
            <Route path='/' exact component={Landing} />
            <Route path='(/login|/slack/callback)' exact component={Login} />
            <Route path='/admin/decisions' exact component={DecisionList} />
            <Route
              path='/admin/decisions/:id'
              exact
              component={DecisionDetail}
            />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
