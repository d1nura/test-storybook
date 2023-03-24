import TitleNavbar from "./TitleNavbar";

export default {
  title: "Title Navbar",
  component: TitleNavbar,
};

export const TitleNav = (props: { header: string; titleList: string[] }) => (
  <TitleNavbar {...props} />
);
