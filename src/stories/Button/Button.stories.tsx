import { ComponentStory } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: "click",
  onClick: () => console.log("button clicked"),
  width: "100px",
  height: "40px",
  color: "#a491ff",
};
