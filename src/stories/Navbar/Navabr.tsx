import { useState } from "react";
import styled from "styled-components";
import { Icons } from "../../icons/Icons";
import IconNavbar from "./IconNavbar";
import NavIcon from "./NavSelectors/NavIcon";
import TitleNavbar from "./TitleNavbar";

type IconNavMap = {
  title: string;
  key: string;
  icon: JSX.Element;
};

const NavContainer = styled.nav`
  height: 100%;
  display: flex;
`;

const IconNavMap: IconNavMap[] = [
  {
    key: "one",
    title: "Overview",
    icon: <Icons.ActivitySvg />,
  },
  {
    key: "two",
    title: "Play",
    icon: <Icons.PlaySvg />,
  },
  {
    key: "three",
    title: "Shop",
    icon: <Icons.Anchor />,
  },
  {
    key: "four",
    title: "Charts",
    icon: <Icons.Chart />,
  },
];

const Navbar = () => {
  const [selectedTitle, setSelectedTitle] = useState(IconNavMap[0]);

  const selectNavItem = (navItem: IconNavMap) => {
    setSelectedTitle(navItem);
  };

  return (
    <NavContainer>
      <IconNavbar>
        {IconNavMap.map((navItem) => {
          return (
            <NavIcon
              selected={selectedTitle.key === navItem.key}
              icon={navItem.icon}
              onClick={() => selectNavItem(navItem)}
            ></NavIcon>
          );
        })}
      </IconNavbar>
      <TitleNavbar
        titleKey={selectedTitle.key}
        header={selectedTitle.title}
      ></TitleNavbar>
    </NavContainer>
  );
};

export default Navbar;
