import { Icon as I, iconProps, styledProps } from "./Icon";

export default {
  title: "Icon",
  component: I,
};

export const Icon = (props: styledProps & iconProps) => <I {...props} />;
