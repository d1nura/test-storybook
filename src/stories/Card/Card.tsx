import styled from "styled-components";

type Props = {
  height: string;
  width: string;
};

const Container = styled.div`
  border: 1px solid #8493a2;
  border-radius: 5px;
  margin-top: 10px;
  padding: 0px 20px;
  height: ${(props: Props) => props.height};
  width: ${(props: Props) => props.width};
`;

export const Card = ({
  height,
  width,
}: {
  height?: string;
  width?: string;
}) => {
  return (
    <Container height={height ?? "auto"} width={width ?? "auto"}>
      <p>card</p>
    </Container>
  );
};
