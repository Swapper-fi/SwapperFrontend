import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Typography } from '../components/typography';
import './App.css';
import { Exchange } from './exchange';
import { Farm } from './farm';
import { Invest } from './invest';
import { Portfolio } from './portfolio/portfolio';
import { Transactions } from './transactions';

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
        <div className="navBar">
          <ul>
            {routes.map((route) => {
              return (
                <div>
                  <Link style={{ textDecoration: 'none' }} to={route.link}>
                    <div className="navBarListObject">
                      <Typography type="menu" text={route.name} />
                    </div>
                  </Link>
                </div>
              )
            })}
          </ul>
        </div>
        <Switch>
          {routes.reverse().map((route) => {
            return (
              <Route path={route.link}>
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
