import React from 'react';

//Hover Icons
import Home from '../../assets/home.svg';
import Activities from '../../assets/activities.svg';
import Exchange from '../../assets/exchange.svg';
import Markets from '../../assets/markets.svg';
import Notifications from '../../assets/notifications.svg'
import Promotions from '../../assets/promotions.svg';
import Settings from '../../assets/settings.svg';
import Wallets from '../../assets/wallets.svg';
import Tick from '../../assets/tick.svg';

//SelectedIcons
import HomeSelected from '../../assets/home-selected.svg';
import ActivitiesSelected from '../../assets/activities-selected.svg';
import ExchangeSelected from '../../assets/exchange-selected.svg';
import MarketsSelected from '../../assets/markets-selected.svg';
import NotificationsSelected from '../../assets/notifications-selected.svg'
import PromotionsSelected from '../../assets/promotions-selected.svg';
import SettingsSelected from '../../assets/settings-selected.svg';
import WalletsSelected from '../../assets/wallets-selected.svg';
import TickSelected from '../../assets/tick-selected.svg';

//HoverIcons
import HomeHover from '../../assets/home-hover.svg';
import ActivitiesHover from '../../assets/activities-hover.svg';
import ExchangeHover from '../../assets/exchange-hover.svg';
import MarketsHover from '../../assets/markets-hover.svg';
import NotificationsHover from '../../assets/notifications-hover.svg'
import PromotionsHover from '../../assets/promotions-hover.svg'
import SettingsHover from '../../assets/settings-hover.svg'
import WalletsHover from '../../assets/wallets-hover.svg'

export interface IconProps {
  type:
  "Home"
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
  | "Tick"
  | "TickSelected"
}

const Icon: React.FC<IconProps> = (props) => {
  const { type } = props
  let image;
  switch (type) {
    case "Home":
      image = Home;
      break;
    case "Home-Selected":
      image = HomeSelected;
      break;
    case "Home-Hover":
      image = HomeHover;
      break;
    case "Activities":
      image = Activities;
      break;
    case "Activities-Hover":
      image = ActivitiesHover;
      break;
    case "Activities-Selected":
      image = ActivitiesSelected;
      break;
    case "Exchange":
      image = Exchange;
      break;
    case "Exchange-Selected":
      image = ExchangeSelected;
      break;
    case "Exchange-Hover":
      image = ExchangeHover;
      break;
    case "Markets":
      image = Markets;
      break;
    case "Markets-Selected":
      image = MarketsSelected;
      break;
    case "Markets-Hover":
      image = MarketsHover;
      break;
    case "Notifications":
      image = Notifications;
      break;
    case "Notifications-Selected":
      image = NotificationsSelected;
      break;
    case "Notifications-Hover":
      image = NotificationsHover;
      break;
    case "Promotions":
      image = Promotions;
      break;
    case "Promotions-Selected":
      image = PromotionsSelected;
      break;
    case "Promotions-Hover":
      image = PromotionsHover;
      break;
    case "Settings":
      image = Settings;
      break;
    case "Settings-Selected":
      image = SettingsSelected;
      break;
    case "Settings-Hover":
      image = SettingsHover;
      break;
    case "Wallets":
      image = Wallets;
      break;
    case "Wallets-Selected":
      image = WalletsSelected;
      break;
    case "Wallets-Hover":
      image = WalletsHover;
      break;
    case "Tick":
      image = Tick;
      break;
    case "TickSelected":
      image = TickSelected;
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

