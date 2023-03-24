import MainPage from "./MainPage";

export default {
  title: "Main",
  component: MainPage,
  parameters: {
    layout: "fullscreen",
  },
};

export const Page = () => <MainPage />;
