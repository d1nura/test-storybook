import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faComment, faHeart, faMouse } from "@fortawesome/free-solid-svg-icons";
import _ from "lodash";
import styled from "styled-components";
import { Icon } from "../Icon/Icon";
import { Heading } from "../Typography/Heading";

const LikesHolder = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const HeadingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LikesContainerItem = ({
  title1,
  title2,
  title3,
  title3Color,
  icon,
}: {
  title1: string;
  title2: string;
  title3: string;
  title3Color: string;
  icon: IconProp;
}) => {
  return (
    <HeadingsContainer>
      <Icon
        icon={icon}
        iconColor="#866cff"
        background="#f3f0ff"
        width="35px"
        height="35px"
      />
      <Heading.P fontSize="12px" mb="5px" mt="5px">
        {title1}
      </Heading.P>
      <Heading.H3 fontSize="14px" color="black" mb="5px">
        {title2}
      </Heading.H3>
      <Heading.P fontSize="12px" color={title3Color}>
        {title3}
      </Heading.P>
    </HeadingsContainer>
  );
};

const items = [
  {
    title1: "Likes",
    title2: "12.5k",
    title3: "+5.5%",
    title3Color: "#41c93f",
    icon: faHeart,
  },
  {
    title1: "Comments",
    title2: "936",
    title3: "0.00%",
    title3Color: "#a9b1bc",
    icon: faComment,
  },
  {
    title1: "Clicks",
    title2: "349",
    title3: "-3.6%",
    title3Color: "#ff676e",
    icon: faMouse,
  },
];

export const LikesContainer = () => {
  return (
    <LikesHolder>
      {items.map(({ title1, title2, title3, title3Color, icon }) => {
        return (
          <LikesContainerItem
            key={_.uniqueId()}
            {...{ title1, title2, title3, title3Color, icon }}
          />
        );
      })}
    </LikesHolder>
  );
};
