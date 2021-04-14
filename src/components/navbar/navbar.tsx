import React from 'react';
import { Link } from 'react-router-dom'
import { Typography } from '../typography';

import "./navbar.css"
export interface NavBarProps {
  routes: {
    name: string,
    link: string,
    screen: React.FC<any>
  }[]
}

const NavBar: React.FC<NavBarProps> = props => {
  const { routes } = props;
  let release = process.env.REACT_APP_BRANCH === 'main' ? 'Release' : 'Development'
  let version = process.env.REACT_APP_VERSION

  return (
    <div className="navBar">
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
  )
}

export {
  NavBar
}