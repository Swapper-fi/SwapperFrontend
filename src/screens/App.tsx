import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { colors } from '../colors';
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
  let release = process.env.REACT_APP_BRANCH === 'main' ? 'Release' : 'Development'
  let version = process.env.REACT_APP_VERSION
  return (
    <Router>
      <div className="App">
        <div style={{ background: colors.primary }} className="navBar">
          <ul>
            {routes.map((route, index) => {
              return (
                <div key={index}>
                  <Link style={{ textDecoration: 'none' }} to={route.link}>
                    <div className="navBarListObject">
                      <Typography type="menu" text={route.name} />
                    </div>
                  </Link>
                </div>
              )
            })}
          </ul>
          <div className="versionBox">
            <Typography type="captionLarge" text={`Release: ${release}`} />
            <Typography type="captionSmall" text={`Version: ${version}`} />
          </div>
        </div>
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
