import { ReactNode } from "react";
import styled from "styled-components";

const H = styled.div`
  padding: 20px 30px;
  margin: 30px 0px;
  background: white;
  border-radius: 10px;
  height: ${({ height }: { height: string }) => height};
`;

export const Holder = ({
  children,
  height = "auto",
}: {
  children: ReactNode;
  height?: string;
}) => {
  return <H height={height}>{children}</H>;
};
