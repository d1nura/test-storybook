import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentStory } from "@storybook/react";
import { Heading } from "./Heading";

export default {
  title: "Heading",
  component: Heading,
};

const P: ComponentStory<typeof Heading.P> = (args) => <Heading.P {...args} />;

const H3: ComponentStory<typeof Heading.H3> = (args) => (
  <Heading.H3 {...args} />
);

export const Paragraph = P.bind({});
Paragraph.args = {
  children: "This is paragraph",
  fontSize: "30px",
  color: "black",
  ml: "10px",
  mb: "10px",
  mt: "10px",
};

export const Heading3 = H3.bind({});
Heading3.args = {
  children: "This is Heading 3",
};
