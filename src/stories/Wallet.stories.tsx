import { Story, Meta } from '@storybook/react/types-6-0';
import { WalletSelection } from '../components/walletSelection';
import { WalletSelectionProps } from '../components/walletSelection/walletSelection';
export default {
  title: 'Components/Wallet',
  component: WalletSelection,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<WalletSelectionProps> = (args) => <WalletSelection {...args} />;
export const WalletSelectionPopup = Template.bind({})
WalletSelectionPopup.args = {
}
