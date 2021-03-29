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
export const D1 = Template.bind({})
D1.args = {
  text: "January 2012",
  type: "d1",
}

export const D2 = Template.bind({})
D2.args = {
  text: "January 2012",
  type: "d2"
}

export const D3 = Template.bind({})
D3.args = {
  text: "January 2012",
  type: "d3"
}

export const H1 = Template.bind({})
H1.args = {
  text: "January 2012",
  type: "h1"
}

export const H2 = Template.bind({})
H2.args = {
  text: "January 2012",
  type: "h2"
}

export const H3 = Template.bind({})
H3.args = {
  text: "January 2012",
  type: "h3"
}

export const H4 = Template.bind({})
H4.args = {
  text: "January 2012",
  type: "h4"
}

export const H5 = Template.bind({})
H5.args = {
  text: "January 2012",
  type: "h5"
}

export const menu = Template.bind({})
menu.args = {
  text: "January 2012",
  type: "menu"
}

export const title = Template.bind({})
title.args = {
  text: "January 2012",
  type: "title"
}

export const captionLarge = Template.bind({})
captionLarge.args = {
  text: "January 2012",
  type: "captionLarge"
}

export const captionSmall = Template.bind({})
captionSmall.args = {
  text: "January 2012",
  type: "captionSmall"
}

export const bodyLarge = Template.bind({})
bodyLarge.args = {
  text: "January 2012",
  type: "bodyLarge"
}

export const bodySmall = Template.bind({})
bodySmall.args = {
  text: "January 2012",
  type: "bodySmall"
}

export const buttonLarge = Template.bind({})
buttonLarge.args = {
  text: "January 2012",
  type: "buttonLarge"
}
