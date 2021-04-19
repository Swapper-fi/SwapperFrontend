import { Story, Meta } from '@storybook/react/types-6-0';
import { Icon } from '../components/icon';
import { IconProps } from '../components/icon/icon';
export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;
export const Home = Template.bind({})
Home.args = {
  type: "Home"
}

export const Activites = Template.bind({})
Activites.args = {
  type: "Activities"
}

export const Exchange = Template.bind({})
Exchange.args = {
  type: "Exchange"
}

export const Markets = Template.bind({})
Markets.args = {
  type: "Markets"
}
export const Notifications = Template.bind({})
Notifications.args = {
  type: "Notifications"
}

export const Promotions = Template.bind({})
Promotions.args = {
  type: "Promotions"
}

export const Settings = Template.bind({})
Settings.args = {
  type: "Settings"
}

export const Wallets = Template.bind({})
Wallets.args = {
  type: "Wallets"
}