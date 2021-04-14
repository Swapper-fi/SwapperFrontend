import React from 'react';
import Home from '../../assets/home.svg';
import Activities from '../../assets/activities.svg';
import Exchange from '../../assets/exchange.svg';
import Markets from '../../assets/markets.svg';
import Notifications from '../../assets/notifications.svg'
import Promotions from '../../assets/promotions.svg'
import Settings from '../../assets/settings.svg'
import Wallets from '../../assets/wallets.svg'
export interface IconProps {
  type: "Home" | "Activites" | "Exchange" | "Markets" | "Notifications" | "Promotions" | "Settings" | "Wallets"
}
const Icon: React.FC<IconProps> = (props) => {
  const { type } = props
  let image;
  switch (type) {
    case "Home":
      image = Home;
      break;
    case "Activites":
      image = Activities;
      break;
    case "Exchange":
      image = Exchange;
      break;
    case "Markets":
      image = Markets;
      break;
    case "Notifications":
      image = Notifications;
      break;
    case "Promotions":
      image = Promotions;
      break;
    case "Settings":
      image = Settings;
      break;
    case "Wallets":
      image = Wallets;
      break;
    default:
      image = Home;

  }
  return (
    <img src={image} />
  )
}

export {
  Icon
}

