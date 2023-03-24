import { ReactNode } from "react";
import Layout from "./Layout";

export default {
  title: "Layout",
  component: Layout,
  parameters: {
    layout: "fullscreen",
  },
};

export const AppLayout = (props: any) => <Layout {...props}> </Layout>;
