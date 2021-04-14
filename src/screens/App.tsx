import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { NavBar } from '../components/navbar';
import { Exchange } from './exchange';
import { Farm } from './farm';
import { Invest } from './invest';
import { Portfolio } from './portfolio/portfolio';
import { Transactions } from './transactions';

import './App.css';
function App() {
  const routes = [
    { link: "/", name: "Portfolio", screen: Portfolio },
    { link: "/exchange", name: "Exchange", screen: Exchange },
    { link: "/farms", name: "Farms", screen: Farm },
    { link: "/invest", name: "Invest", screen: Invest },
    { link: "/transactions", name: "Trasactions", screen: Transactions },
  ]
  return (
    <Router>
      <div className="App">
        <NavBar routes={routes} />
        <Switch>
          {routes.reverse().map((route, index) => {
            return (
              <Route path={route.link} key={index}>
                {route.screen}
              </Route>
            )
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
