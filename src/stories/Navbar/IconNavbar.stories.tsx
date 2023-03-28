import { ComponentStory } from "@storybook/react";
import _ from "lodash";
import IconNavbar from "./IconNavbar";
import { IconNavMap } from "./Navabr";
import NavIcon from "./NavSelectors/NavIcon";

export default {
  title: "Icon navbar",
  component: IconNavbar,
};

const Template: ComponentStory<typeof IconNavbar> = (args) => (
  <IconNavbar {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  children: IconNavMap.map((navItem) => {
    return (
      <NavIcon
        key={_.uniqueId()}
        selected={false}
        icon={navItem.icon}
        onClick={() => {}}
      ></NavIcon>
    );
  }),
};
