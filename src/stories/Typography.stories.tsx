import { Story, Meta } from '@storybook/react/types-6-0';

import { Typography } from '../components/typography'
import { TypographyProps } from '../components/typography/typography'
export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;


const Template: Story<TypographyProps> = (args) => <Typography {...args} />;
export const H1 = Template.bind({})
H1.args = {
  text: "January 2012" 
}