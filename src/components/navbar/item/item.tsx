import React from 'react'
import { colors } from '../../../colors';
import { Assets } from '../../../types';
import { Typography } from '../../typography'

import "./item.css"
export interface ItemProp {
  selected: boolean,
  text: Assets,
  onClickHandler: (assets: Assets) => void;
}

const Item: React.FC<ItemProp> = (props) => {
  const { selected, text, onClickHandler } = props;
  const [hover, setHover] = React.useState(false)

  const onClick = () => {
    onClickHandler(text)
    setHover(false)
  }
  const onMouseEnter = () => {
    if (!selected) {
      setHover(true)
    }
  }
  const onMouseLeave = () => {
    setHover(false)
  }
  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`menuNoImageItem`}
      style={{
        background: selected ? colors.lightGrey : 'transparent'
      }}>
      <div className="menuContent">
        <div
          style={{
            display: 'flex',
            marginLeft: '10px',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Typography textColor={selected || hover ? colors.primary : undefined} type="menu" text={text} />
        </div>
      </div>
    </div>
  )
}


export {
  Item
}