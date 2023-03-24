import { ReactNode } from "react";
import styled from "styled-components";

const Layout = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 30px;
  box-sizing: border-box;
`;

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return <Layout>{children}</Layout>;
};
