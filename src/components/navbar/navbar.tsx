import React from 'react';
import Switch from '@material-ui/core/Switch';
import { Assets, AssetSelection, RouteSelection, RouteType, Themes } from '../../types';
import { Typography } from '../typography';
import { ImageItem } from './imageItem';
import { Item } from './item';
import { ProfileCard } from './profileCard';

import NavbarBranding from '../../assets/navbarBranding.svg'
import MoonImage from '../../assets/moon.svg'
import "./navbar.css"
export interface NavBarProps {
  defaultRouteSelection: RouteSelection
  selectedRoute: RouteSelection
  setSelectedRoute: React.Dispatch<React.SetStateAction<RouteSelection>>
  defaultAssetSelection: AssetSelection
  selectedAsset: AssetSelection
  setSelectedAsset: React.Dispatch<React.SetStateAction<AssetSelection>>
  selectedTheme: Themes
  setSelectedTheme: React.Dispatch<React.SetStateAction<Themes>>
  assets: Assets[]
  routes: RouteType[]
}

const NavBar: React.FC<NavBarProps> = props => {
  const {
    defaultRouteSelection,
    selectedRoute,
    setSelectedRoute,
    defaultAssetSelection,
    selectedAsset,
    setSelectedAsset,
    selectedTheme,
    setSelectedTheme,
    assets,
    routes } = props;
  let release = process.env.REACT_APP_BRANCH === 'main' ? 'Release' : 'Development'
  let version = process.env.REACT_APP_VERSION

  const onClickHandler = (route: string) => {
    setSelectedRoute({
      ...defaultRouteSelection,
      [route]: true,
    })
  }
  const onNativeAssetClickHandler = (asset: Assets) => {
    setSelectedAsset({
      ...defaultAssetSelection,
      [asset]: true
    })
  }
  const onHandleChangeTheme = () => {
    //Flip the selected theme
    setSelectedTheme({
      isDark: !selectedTheme.isDark
    })
  }
  return (
    <div className="navBar">
      <ul style={{ paddingInlineStart: '20px', paddingInlineEnd: '20px' }}>
        <ProfileCard image={'someImage'} address="syahrul" value={"$123.39"} />
        <div className="assetSelectionRow">
          {assets.map((asset, index) => {
            return (
              <Item selected={selectedAsset[asset]} onClickHandler={onNativeAssetClickHandler} text={asset} />
            )
          })}
        </div>
        {routes.reverse().map((route, index) => {
          return (
            <div key={index}>
              <ImageItem selected={selectedRoute[route.name]} onClickHandler={onClickHandler} route={route} />
            </div>
          )
        })}
      </ul>

      <div>
        <div className="themeSwitchBox">
          <img src={MoonImage} />
          <Switch
            checked={selectedTheme.isDark}
            onChange={onHandleChangeTheme}
            color="primary"
          />
        </div>
        <div className="brandingBox">
          <img src={NavbarBranding} />
        </div>
        <div className="versionBox">
          <Typography type="captionLarge" text={`Release: ${release}`} />
          <Typography type="captionSmall" text={`Version: ${version}`} />
        </div>
      </div>
    </div>
  )
}

export {
  NavBar
}