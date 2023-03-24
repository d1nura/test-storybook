import styled from "styled-components";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { AppLayout } from "../Layout/AppLayout";
import { Holder } from "../Layout/Holder";
import { Heading } from "../Typography/Heading";

const MainTile = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  justify-content: space-between;
`;

const MainButton = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
  justify-content: space-between;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardHolder = styled.div`
  display: flex;
  border: 1px solid red;
`;

const VerticalHolder = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const App = () => {
  return (
    <AppLayout>
      <Heading.H1>Overview</Heading.H1>
      <Holder>
        <HeaderContainer>
          <MainTile>
            <Heading.H3>Social Media</Heading.H3>
            <Heading.P>Last 28 days</Heading.P>
          </MainTile>
          <MainButton>
            <Heading.P>Data sources</Heading.P>
            <Button>See more</Button>
          </MainButton>
        </HeaderContainer>
        <CardHolder>
          <Card height="500px" />
          <VerticalHolder>
            <Card height="50%" width="auto" />
            <Card height="50%" />
          </VerticalHolder>
        </CardHolder>
      </Holder>
    </AppLayout>
  );
};
