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
    max-width: 65px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.6s;
    color: #866cff;
    :hover {
      cursor: pointer;
      background-color: #f2f4fe;
    }
    ${({ selcted }: { selcted: boolean }) =>
      selcted &&
      `
      cursor: pointer;
      background-color:#f2f4fe;
  `}
  `;

  return (
    <Container selcted={selected} onClick={onClick}>
      {icon}
    </Container>
  );
};

export default NavIcon;
