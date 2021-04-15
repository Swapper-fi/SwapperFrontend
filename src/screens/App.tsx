import React from 'react';
import { RouteSelection, RouteType } from '../types';
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
  const routes: RouteType[] = [
    { link: "/", name: "Overview", screen: Portfolio },
    { link: "/Swap", name: "Swap", screen: Exchange },
    { link: "/Pool", name: "Pool", screen: Farm },
    { link: "/History", name: "History", screen: Invest },
    { link: "/Settings", name: "Settings", screen: Transactions },
  ]
  const defaultRouteSelection: RouteSelection = {
    Overview: false,
    Swap: false,
    Pool: false,
    History: false,
    Settings: false,
  }
  const [selectedRoute, setSelectedRoute] = React.useState(defaultRouteSelection)

  return (
    <Router>
      <div className="App">
        <NavBar
          defaultRouteSelection={defaultRouteSelection}
          selectedRoute={selectedRoute}
          setSelectedRoute={setSelectedRoute}
          routes={routes} />
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
