import { Story, Meta } from '@storybook/react/types-6-0';
import { colors } from '../colors';
import { Typography } from '../components/typography';

interface CardProps {
  //@ts-ignore
  color: BackgroundColor,
  text: String,
}

const Card: React.FC<CardProps> = ({ color, text }) => {
  return (
    <div
      style={{
        width: "375px",
        height: "80px",
        borderRadius: "16px",
        border: '5px solid rgba(0, 0, 0, 1)',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        background: color,
        textAlign: "center",
      }}>
      <Typography type="h4" text={text} ></Typography>
    </div>
  )
}

export default {
  title: 'Colors/Colors',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<any> = (args) => <Card {...args} />;
export const Primary = Template.bind({})
Primary.args = {
  color: colors.primary,
  text: "Primary Color"
}

export const Dark = Template.bind({})
Dark.args = {
  color: colors.dark,
  text: "Dark Color"
}

export const LightGrey = Template.bind({})
LightGrey.args = {
  color: colors.lightGrey,
  text: "Light Grey"
}

export const DarkCard = Template.bind({})
DarkCard.args = {
  color: colors.darkCard,
  text: "Dark Card"
}

export const AccentOne = Template.bind({})
AccentOne.args = {
  color: colors.accentone,
  text: "Accent One"
}

export const AccentTwo = Template.bind({})
AccentTwo.args = {
  color: colors.accenttwo,
  text: "Accent Two"
}

export const AccentThree = Template.bind({})
AccentThree.args = {
  color: colors.accentthree,
  text: "Accent Three"
}

export const MeaningPrimary = Template.bind({})
MeaningPrimary.args = {
  color: colors.meaningprimary,
  text: "Meaning Primary"
}

export const MeaningAlert = Template.bind({})
MeaningAlert.args = {
  color: colors.meaningalert,
  text: "Meaning Alert"
}

export const MeaningWarning = Template.bind({})
MeaningWarning.args = {
  color: colors.meaningwarning,
  text: "Meaning Warning"
}


export const ChartPrimary = Template.bind({})
ChartPrimary.args = {
  color: colors.chartprimary,
  text: "Chart Primary"
}

export const ChartSecondary = Template.bind({})
ChartSecondary.args = {
  color: colors.chartsecondary,
  text: "Chart Secondary"
}


export const GradientPrimary = Template.bind({})
GradientPrimary.args = {
  color: colors.gradientprimary,
  text: "Gradient Primary"
}

export const GradientSecondary = Template.bind({})
GradientSecondary.args = {
  color: colors.gradientsecondary,
  text: "Gradient Secondary"
}

