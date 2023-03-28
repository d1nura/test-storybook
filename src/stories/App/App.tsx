import { faBook, faFilm, faFire } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { ChartContainer } from "../components/ChartContainer";
import { IconHolder } from "../components/IconHolder";
import { LikesContainer } from "../components/LikesContainer";
import { PostsContainer } from "../components/PostsContainer";
import { AppLayout } from "../Layout/AppLayout";
import { Holder } from "../Layout/Holder";
import { Heading } from "../Typography/Heading";

const MainTile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MainButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonDesc = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardHolder = styled.div`
  width: 100%;
  display: flex;
  margin-top: 16px;
`;

const VerticalHolder = styled.div`
  height: 100%;
  width: 45%;
  display: grid;
  grid-template-rows: 135px 197px;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  margin-left: 10px;
`;

export const App = () => {
  return (
    <AppLayout>
      <Heading.H1 mt="7px" fontSize="25px">
        Overview
      </Heading.H1>
      <Holder height="412px">
        <HeaderContainer>
          <MainTile>
            <Heading.H3 fontSize="18px">Social Media</Heading.H3>
            <Heading.P fontSize="12px" ml="20px">
              Last 28 days
            </Heading.P>
          </MainTile>
          <MainButton>
            <ButtonDesc>
              <Heading.P fontSize="14px">Data sources (6):</Heading.P>
              <IconHolder icon={faFire} />
              <IconHolder icon={faFilm} />
              <IconHolder icon={faBook} />
            </ButtonDesc>
            <Button height="50px">See more</Button>
          </MainButton>
        </HeaderContainer>
        <CardHolder>
          <Card height="300px" width="50%" padding="20px">
            <ChartContainer />
          </Card>
          <VerticalHolder>
            <Card>
              <LikesContainer />
            </Card>
            <Card padding="20px">
              <PostsContainer />
            </Card>
          </VerticalHolder>
        </CardHolder>
      </Holder>
    </AppLayout>
  );
};
