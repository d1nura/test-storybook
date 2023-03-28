import { ComponentMeta, ComponentStory } from "@storybook/react";
import TitleNavbar from "./TitleNavbar";

export default {
  title: "Title navbar",
  component: TitleNavbar,
  argTypes: {
    titleKey: {
      options: ["one", "two", "three", "four"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof TitleNavbar>;

const Template: ComponentStory<typeof TitleNavbar> = (args) => (
  <TitleNavbar {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  header: "Header",
  titleKey: "one",
};
