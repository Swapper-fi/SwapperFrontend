import React from 'react';
import { RouteSelection, RouteType } from '../../types';
import { Typography } from '../typography';
import { Item } from './item';

import "./navbar.css"
export interface NavBarProps {
  defaultRouteSelection: RouteSelection,
  selectedRoute: RouteSelection,
  setSelectedRoute: React.Dispatch<React.SetStateAction<RouteSelection>>,
  routes: RouteType[]
}

const NavBar: React.FC<NavBarProps> = props => {
  const { defaultRouteSelection, selectedRoute, setSelectedRoute, routes } = props;
  let release = process.env.REACT_APP_BRANCH === 'main' ? 'Release' : 'Development'
  let version = process.env.REACT_APP_VERSION

  const onClickHandler = (route: string) => {
    setSelectedRoute({
      ...defaultRouteSelection,
      [route]: true,
    })
  }

  return (
    <div className="navBar">
      {routes.reverse().map((route, index) => {
        return (
          <div className="navBarListObject" key={index}>
            <Item selected={selectedRoute[route.name]} onClickHandler={onClickHandler} route={route} />
          </div>
        )
      })}
      <div className="versionBox">
        <Typography type="captionLarge" text={`Release: ${release}`} />
        <Typography type="captionSmall" text={`Version: ${version}`} />
      </div>
    </div>
  )
}

export {
  NavBar
}