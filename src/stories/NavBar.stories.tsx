import { Story, Meta } from '@storybook/react/types-6-0';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavBar } from '../components/navbar';
import { NavBarProps } from '../components/navbar/navbar';

import { Overview } from '../screens/overview';
import { Exchange } from '../screens/exchange';
import { Pool } from '../screens/pool';
import { History } from '../screens/history';
import { Settings } from '../screens/settings';
import { RouteType } from '../types';

export default {
  title: 'Components/NavBar',
  component: NavBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const routes: RouteType[] = [
  // { link: "/", name: "Overview", screen: Exchange },
  // { link: "/Swap", name: "Swap", screen: Exchange },
  // { link: "/Pool", name: "Pool", screen: Pool },
  // { link: "/History", name: "History", screen: History },
  // { link: "/Settings", name: "Settings", screen: Settings },
]

const Template: Story<NavBarProps> = (args) =>
  <Router>
    <NavBar {...args} />
  </Router>;
export const Navigation = Template.bind({})
Navigation.args = {
  routes: routes
}
