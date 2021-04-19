import React from 'react';
import { colors } from '../../colors';
import { Typography } from '../typography';

import "./walletSelection.css"
export interface WalletSelectionProps {

}

const WalletSelection: React.FC<WalletSelectionProps> = (props) => {
  return (
    <div className={'walletSelection'} style={{ background: colors.darkCard }}>
      <div style={{ marginLeft: '10px' }}>
        <Typography type="buttonsmall" text="Connected Wallets" />
      </div>
    </div>
  )
}

export {
  WalletSelection
}