import { Card } from "./Card";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Card",
  component: Card,
};

export const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args} />
);

export const Primary = Template.bind({});
Primary.args = { height: "200px", width: "150px", padding: "20px" };
