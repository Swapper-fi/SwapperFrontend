import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../../icon';
import { Typography } from '../../typography'
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
      <div className="navBarListObject">
        {/* <Icon type="Home" /> */}
        <Typography type="menu" text={`${selected} ${route.name}`} />
      </div>
    </Link>
  )
}


export {
  Item
}