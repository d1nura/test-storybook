import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentStory } from "@storybook/react";

import NavIcon from "./NavIcon";

export default {
  title: "Nav icon",
  component: NavIcon,
};

const Template: ComponentStory<typeof NavIcon> = (args) => (
  <NavIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  icon: <FontAwesomeIcon icon={faFire} />,
  selected: true,
};
