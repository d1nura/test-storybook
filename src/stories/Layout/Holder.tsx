import { ReactNode } from "react";
import styled from "styled-components";

const H = styled.div`
  padding: 20px;
  margin: 30px 0px;
  background: white;
  border-radius: 10px;
`;

export const Holder = ({ children }: { children: ReactNode }) => {
  return <H>{children}</H>;
};
