import styled from "styled-components";

const Btn = styled.button`
  border: 2px solid #a491ff;
  padding: 10px;
  min-width: 150px;
  cursor: pointer;
  border-radius: 5px;
  color: #a491ff;
  background: white;
  height: ${({ height }: { height: string }) => height};
`;

export const Button = ({
  children,
  onClick,
  height = "auto",
}: {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  height?: string;
}) => {
  return (
    <Btn onClick={onClick} height={height}>
      {children}
    </Btn>
  );
};
