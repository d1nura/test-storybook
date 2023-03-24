import { ReactNode } from "react";
import IconNavbar from "./IconNavbar";

export default {
  title: "Icon navbar",
  component: IconNavbar,
};

export const IconNav = (props: { children: ReactNode }) => (
  <IconNavbar {...props} />
);
