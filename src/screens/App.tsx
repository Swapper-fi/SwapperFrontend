import React from 'react';
import { AssetSelection, RouteSelection, RouteType } from '../types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { NavBar } from '../components/navbar';
import { Overview } from './overview';
import { Exchange } from './exchange';
import { Pool } from './pool';
import { History } from './history';
import { Settings } from './settings';

import './App.css';
function App() {
  const routes: RouteType[] = [
    { link: "/", name: "Overview", screen: Overview },
    { link: "/Swap", name: "Swap", screen: Exchange },
    { link: "/Pool", name: "Pool", screen: Pool },
    { link: "/History", name: "History", screen: History },
    { link: "/Settings", name: "Settings", screen: Settings },
  ]

  const defaultRouteSelection: RouteSelection = {
    Overview: false,
    Swap: false,
    Pool: false,
    History: false,
    Settings: false,
  }

  //Defaults to eth
  const defaultAssetSelection: AssetSelection = {
    ETH: false,
    BSC: false,
    ALL: false,
  }
  const [selectedRoute, setSelectedRoute] = React.useState(defaultRouteSelection)
  const [selectedAsset, setSelectedAsset] = React.useState(defaultAssetSelection)
  return (
    <Router>
      <div className="App">
        <NavBar
          defaultRouteSelection={defaultRouteSelection}
          selectedRoute={selectedRoute}
          setSelectedRoute={setSelectedRoute}
          defaultAssetSelection={defaultAssetSelection}
          selectedAsset={selectedAsset}
          setSelectedAsset={setSelectedAsset}
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
