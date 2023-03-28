import { faFire } from "@fortawesome/free-solid-svg-icons";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Icon } from "./Icon";

export default {
  title: "Icon",
  component: Icon,
};

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  height: "40px",
  width: "40px",
  icon: faFire,
  iconColor: "blue",
  background: "skyblue",
};
