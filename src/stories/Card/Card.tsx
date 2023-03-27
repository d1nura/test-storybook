import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  height: string;
  width: string;
  padding?: string;
};

const Container = styled.div`
  border: 1px solid #e2e9ef;
  border-radius: 5px;
  padding: ${(props: Props) => props.padding};
  height: ${(props: Props) => props.height};
  width: ${(props: Props) => props.width};
`;

export const Card = ({
  height = "auto",
  width = "auto",
  children,
  padding = "10px",
}: {
  height?: string;
  width?: string;
  children?: ReactNode;
  padding?: string;
}) => {
  return (
    <Container
      height={height ?? "auto"}
      width={width ?? "auto"}
      padding={padding}
    >
      {children}
    </Container>
  );
};
