import { ReactNode } from "react";
import { AppLayout as Layout } from "./AppLayout";

export default {
  title: "App layout",
  component: Layout,
};

export const AppLayout = (props: { children: ReactNode }) => (
  <Layout {...props} />
);
