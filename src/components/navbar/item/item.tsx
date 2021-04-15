import React from 'react'
import { Link } from 'react-router-dom'
import { colors } from '../../../colors';
import { Icon } from '../../icon';
import { Typography } from '../../typography'

import "./item.css"
export interface ItemProp {
  selected: boolean,
  onClickHandler: (route: string) => void;
  route: {
    link: string,
    name: string,
    screen: React.FC<any>
  }
}

const Item: React.FC<ItemProp> = (props) => {
  const { selected, onClickHandler, route } = props;
  const onLinkClick = () => {
    onClickHandler(route.name)
  }
  return (
    <Link style={{ textDecoration: 'none' }} onClick={onLinkClick} to={route.link}>
      <div className={`menuItem`} style={{ background: selected ? colors.lightGrey : 'transparent' }}>
        <div className="menuContent">
          <Icon type="Home" />
          <div style={{ display: 'flex', marginLeft: '10px', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
            <Typography type="menu" text={`${route.name}`} />
          </div>
        </div>
      </div>
    </Link>
  )
}


export {
  Item
}