import styled from "styled-components";

type styledButton = {
  width?: string;
  height?: string;
  color?: string;
};

type buttonProps = {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Btn = styled.button`
  padding: 10px;
  min-width: 150px;
  cursor: pointer;
  border-radius: 5px;
  background: white;
  color: ${({ color }: styledButton) => color};
  height: ${({ height }: styledButton) => height};
  width: ${({ width }: styledButton) => width};
  border: ${({ color }: styledButton) => "2px solid" + color};
`;

export const Button = ({
  children,
  onClick,
  height = "auto",
  width = "auto",
  color = "#a491ff",
}: buttonProps & styledButton) => {
  return <Btn {...{ onClick, height, width, color }}>{children}</Btn>;
};
