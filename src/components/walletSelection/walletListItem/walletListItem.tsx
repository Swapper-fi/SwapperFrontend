import React from 'react';
import { colors } from '../../../colors';
import { Icon } from '../../icon';
import { Typography } from '../../typography';

import ProfilePicture from '../../../assets/profile.svg'
import "./walletListItem.css"
import { WalletInfo } from '../../../types';

export interface WalletListItemProps {
  wallet: WalletInfo
}

const WalletListItem: React.FC<WalletListItemProps> = (props) => {
  const { alias, address, value, selected } = props.wallet;
  const [hover, setHover] = React.useState(false)
  const onMouseEnter = () => {
    if (!selected) {
      setHover(true)
    }
  }
  const onMouseLeave = () => {
    setHover(false)
  }
  const onClick = () => {
    //If selected do nothing
    if (!selected) {
      //Do something
    }
  }
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={`walletListItem`}
      style={{ background: selected ? colors.lightGrey : 'transparent', paddingTop: '10px', paddingBottom: '10px' }}>
      <div className={`walletLeftComponent`}>
        <div className={`walletProfilePic`}>
          <img src={ProfilePicture} />
        </div>
        <div className={`walletTextData`}>
          <Typography type="title" text={alias} />
          <Typography textColor={"#808191"} type="bodySmall" text={address} />
          <Typography textColor={"#808191"} type="bodySmall" text={value} />
        </div>
      </div>
      <div className={`walletTick`}>
        <Icon type={hover || selected ? "TickSelected" : "Tick"} />
      </div>
    </div>
  )
}

export {
  WalletListItem
}