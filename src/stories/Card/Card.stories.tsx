import { Card as C } from "./Card";

export default {
  title: "Card",
  component: C,
};

export const Card = (props: { height: string }) => <C {...props} />;
