import { Story, Meta } from '@storybook/react/types-6-0';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavBar } from '../components/navbar';
import { NavBarProps } from '../components/navbar/navbar';

import { Exchange } from '../screens/exchange';
import { Farm } from '../screens/farm';
import { Invest } from '../screens/invest';
import { Portfolio } from '../screens/portfolio/portfolio';
import { Transactions } from '../screens/transactions';
export default {
  title: 'Components/NavBar',
  component: NavBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const routes: {
  name: "Overview" | "Swap" | "Pool" | "History" | "Settings",
  link: string,
  screen: React.FC<any>
}[] = [
    { link: "/", name: "Overview", screen: Portfolio },
    { link: "/Swap", name: "Swap", screen: Exchange },
    { link: "/Pool", name: "Pool", screen: Farm },
    { link: "/History", name: "History", screen: Invest },
    { link: "/Settings", name: "Settings", screen: Transactions },
  ]

const Template: Story<NavBarProps> = (args) =>
  <Router>
    <NavBar {...args} />
  </Router>;
export const Navigation = Template.bind({})
Navigation.args = {
  routes: routes
}
