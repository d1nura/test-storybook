import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import styled from "styled-components";

const IconNavbar = ({ children }: { children: ReactNode }) => {
  const Container = styled.div`
    width: 60px;
    height: 100%;
    border-right: 1px solid #f2f5fa;
    transition: 0.5s;
  `;

  const Logo = styled.div`
    border-bottom: 1px solid #e4e9f0;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #3c4a8c;
  `;

  return (
    <Container>
      <Logo>
        <FontAwesomeIcon icon={faFire} />
      </Logo>
      {children}
    </Container>
  );
};

export default IconNavbar;
