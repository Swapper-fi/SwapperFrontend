import React from 'react';
import { colors } from '../../colors';
import { Typography } from '../typography';
import { WalletListItem } from './walletListItem/walletListItem';

import "./walletSelection.css"
export interface WalletSelectionProps {

}

const WalletSelection: React.FC<WalletSelectionProps> = (props) => {
  const wallets = [
    {
      alias: "syahrul.eth",
      address: "0x123",
      value: "$123.45",
      selected: true
    },
    {
      alias: "amirah.eth",
      address: "0x1234",
      value: "$123.45",
      selected: false
    }
  ]
  return (
    <div className={'walletSelection'} style={{ background: colors.darkCard }}>
      <Typography textColor={"#808191"} type="buttonsmall" text="Connected Wallets" />
      {wallets.map((wallet, index) => {
        return (
          <WalletListItem wallet={wallet} />
        )
      })}
    </div>
  )
}

export {
  WalletSelection
}