import React from 'react';

import "./walletListItem.css"

export interface WalletListItemProps {
  alias: String
  address: String;
  value: Number;
}
const WalletListItem: React.FC<WalletListItemProps> = (props) => {
  return (
    <div className="walletListItem">
      <h6> This is a wallet list item</h6>
    </div>
  )
}

export {
  WalletListItem
}