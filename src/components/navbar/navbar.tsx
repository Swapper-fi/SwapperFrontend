import React from 'react';
import { Assets, AssetSelection, RouteSelection, RouteType } from '../../types';
import { Typography } from '../typography';
import { ImageItem } from './imageItem';
import { Item } from './item';

import "./navbar.css"
import { ProfileCard } from './profileCard';
export interface NavBarProps {
  defaultRouteSelection: RouteSelection,
  selectedRoute: RouteSelection,
  setSelectedRoute: React.Dispatch<React.SetStateAction<RouteSelection>>,
  defaultAssetSelection: AssetSelection
  selectedAsset: AssetSelection
  setSelectedAsset: React.Dispatch<React.SetStateAction<AssetSelection>>
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
  return (
    <div className="navBar">
      <ul style={{ paddingInlineStart: '20px', paddingInlineEnd: '20px' }}>
        <ProfileCard image={'someImage'} address="syahrul" value={"$123.39"} />
        <div className="assetSelectionRow">
          <Item selected={selectedAsset["ETH"]} onClickHandler={onNativeAssetClickHandler} text={'ETH'} />
          <Item selected={selectedAsset["BSC"]} onClickHandler={onNativeAssetClickHandler} text={'BSC'} />
          <Item selected={selectedAsset["ALL"]} onClickHandler={onNativeAssetClickHandler} text={'ALL'} />
        </div>
        {routes.reverse().map((route, index) => {
          return (
            <div key={index}>
              <ImageItem selected={selectedRoute[route.name]} onClickHandler={onClickHandler} route={route} />
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