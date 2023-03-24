import styled from "styled-components";

const Btn = styled.button`
  border: 2px solid #a491ff;
  padding: 10px;
  min-width: 150px;
  cursor: pointer;
  border-radius: 5px;
  color: #a491ff;
  background: white;
`;

export const Button = ({
  children,
  onClick,
}: {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return <Btn onClick={onClick}>{children}</Btn>;
};
