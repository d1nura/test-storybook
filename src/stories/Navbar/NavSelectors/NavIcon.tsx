import { ReactElement, ReactSVGElement } from "react";
import styled from "styled-components";
import { Icons } from "../../../icons/Icons";

const NavIcon = ({
  icon,
  onClick,
  selected,
}: {
  icon: JSX.Element;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  selected: boolean;
}) => {
  const Container = styled.div`
    max-width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.6s;
    :hover {
      cursor: pointer;
      background-color: #c9eeff;
      // color: white;
    }
    ${({ selcted }: { selcted: boolean }) =>
      selcted &&
      `
      cursor: pointer;
      background-color: #C9EEFF;
      // color: white;
  `}
  `;

  return (
    <Container selcted={selected} onClick={onClick}>
      {icon}
    </Container>
  );
};

export default NavIcon;
