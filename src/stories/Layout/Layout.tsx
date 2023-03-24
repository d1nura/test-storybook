import { ReactNode } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  position: fixed;
  box-sizing: border-box;
`;

const AppSection = styled.div`
  width: 100%;
  background: #f5f6ff;
`;

const Layout = ({ children }: { children: ReactNode[] }) => {
  const [navbar, app] = children;
  return (
    <MainContainer>
      <div>{navbar}</div>
      <AppSection>{app}</AppSection>
    </MainContainer>
  );
};

export default Layout;
