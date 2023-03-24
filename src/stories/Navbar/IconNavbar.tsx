import { ReactNode } from "react";
import styled from "styled-components";

const IconNavbar = ({ children }: { children: ReactNode }) => {
  const Container = styled.div`
    width: 60px;
    height: 100%;
    border-right: 1px solid #f2f5fa;
    transition: 0.5s;
  `;

  return <Container>{children}</Container>;
};

export default IconNavbar;
