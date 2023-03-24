import { ReactNode } from "react";
import { Holder as H } from "./Holder";

export default {
  title: "Holder",
  component: H,
};

export const Holder = (props: { children: ReactNode }) => <H {...props} />;
