import React from 'react';
import Switch from '@material-ui/core/Switch';


import { Assets, AssetSelection, RouteSelection, RouteType, Themes } from '../../types';
import { Typography } from '../typography';
import { ImageItem } from './imageItem';
import { Item } from './item';
import { ProfileCard } from './profileCard';


//Redux
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { toggleTheme } from '../../redux/theme'
import { initialWalletState, setSelectedAsset } from '../../redux/wallets'

import NavbarBranding from '../../assets/navbarBranding.svg'
import MoonImage from '../../assets/moon.svg'
import "./navbar.css"
export interface NavBarProps {
  defaultRouteSelection: RouteSelection
  selectedRoute: RouteSelection
  setSelectedRoute: React.Dispatch<React.SetStateAction<RouteSelection>>
  assets: Assets[]
  routes: RouteType[]
}

const NavBar: React.FC<NavBarProps> = props => {
  const {
    defaultRouteSelection,
    selectedRoute,
    setSelectedRoute,
    assets,
    routes } = props;

  //Get state from redux
  const assetSelection = useAppSelector((state) => state.wallet.assetSelection)
  const isDark = useAppSelector((state) => state.theme.isDark)
  const dispatch = useAppDispatch()

  let release = process.env.REACT_APP_BRANCH === 'main' ? 'Release' : 'Development'
  let version = process.env.REACT_APP_VERSION

  const onClickHandler = (route: string) => {
    setSelectedRoute({
      ...defaultRouteSelection,
      [route]: true,
    })
  }
  const onNativeAssetClickHandler = (asset: Assets) => {
    dispatch(setSelectedAsset({
      ...initialWalletState.assetSelection,
      [asset]: true
    }))
  }

  const onHandleChangeTheme = () => {
    dispatch(toggleTheme(!isDark))
  }

  return (
    <div className="navBar">
      <ul style={{ paddingInlineStart: '20px', paddingInlineEnd: '20px' }}>
        <ProfileCard image={'someImage'} address="syahrul" value={"$123.39"} />
        <div className="assetSelectionRow">
          {assets.map((asset, index) => {
            return (
              <Item selected={assetSelection[asset]} onClickHandler={onNativeAssetClickHandler} text={asset} />
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
            checked={isDark}
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