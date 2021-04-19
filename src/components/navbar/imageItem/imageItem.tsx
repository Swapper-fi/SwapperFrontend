import React from 'react'
import { Link } from 'react-router-dom'
import { colors } from '../../../colors';
import { RouteType } from '../../../types';
import { Icon } from '../../icon';
import { Typography } from '../../typography'

import "./imageItem.css"
export interface ItemProp {
  selected: boolean,
  onClickHandler: (route: string) => void;
  route: RouteType
}

const ImageItem: React.FC<ItemProp> = (props) => {
  const { selected, onClickHandler, route } = props;
  const [hover, setHover] = React.useState(false)
  const onLinkClick = () => {
    setHover(false)
    onClickHandler(route.name)
  }

  const onMouseEnter = () => {
    if (!selected) {
      setHover(true)
    }
  }

  const onMouseLeave = () => {
    setHover(false)
  }

  let type: "Home"
    | "Home-Selected"
    | "Home-Hover"
    | "Activities"
    | "Activities-Selected"
    | "Activities-Hover"
    | "Exchange"
    | "Exchange-Selected"
    | "Exchange-Hover"
    | "Markets"
    | "Markets-Selected"
    | "Markets-Hover"
    | "Notifications"
    | "Notifications-Selected"
    | "Notifications-Hover"
    | "Promotions"
    | "Promotions-Selected"
    | "Promotions-Hover"
    | "Settings"
    | "Settings-Selected"
    | "Settings-Hover"
    | "Wallets"
    | "Wallets-Selected"
    | "Wallets-Hover"

  switch (route.name) {
    case "Overview":
      type = !selected ? "Home" : "Home-Selected"
      type = !hover ? type : "Home-Hover"
      break;
    case "Swap":
      type = !selected ? "Exchange" : "Exchange-Selected"
      type = !hover ? type : "Exchange-Hover"
      break;
    case "Pool":
      type = !selected ? "Markets" : "Markets-Selected"
      type = !hover ? type : "Markets-Hover"
      break;
    case "History":
      type = !selected ? "Activities" : "Activities-Selected"
      type = !hover ? type : "Activities-Hover"
      break
    case "Settings":
      type = !selected ? "Settings" : "Settings-Selected"
      type = !hover ? type : "Settings-Hover"
      break
  }
  return (
    <Link
      className="link"
      onClick={onLinkClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      to={route.link}>
      <div
        className={`menuItem`}
        style={{
          background: selected ? colors.lightGrey : 'transparent'
        }}>
        <div className="menuContent">
          <Icon type={type} />
          <div
            style={{
              display: 'flex',
              marginLeft: '10px',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Typography textColor={selected || hover ? colors.primary : undefined} type="menu" text={`${route.name}`} />
          </div>
        </div>
      </div>
    </Link>
  )
}


export {
  ImageItem
}