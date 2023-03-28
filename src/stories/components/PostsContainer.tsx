import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faF, faFire, faFish } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "lodash";
import styled from "styled-components";
import { Heading } from "../Typography/Heading";

const PostHolder = styled.div`
  position: relative;
  height: 50px;
  margin: 15px 0px;
  display: flex;
  align-items: center;
`;

const PostImage = styled.img`
  width: 50px;
  border-radius: 5px;
`;

const PostHeadings = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const IconHolder = styled.div`
  position: absolute;
  background-color: #f3f5fb;
  width: 18px;
  height: 18px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  bottom: -5px;
  right: -8px;
  color: red;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Post = ({
  title,
  description,
  imageSrc,
  icon,
}: {
  title: string;
  description: string;
  imageSrc: string;
  icon: IconProp;
}) => {
  return (
    <PostHolder>
      <ImageContainer>
        <PostImage src={imageSrc} />
        <IconHolder>
          <FontAwesomeIcon icon={icon} />
        </IconHolder>
      </ImageContainer>
      <PostHeadings>
        <Heading.P fontSize="12px" mb="5px">
          {title}
        </Heading.P>
        <Heading.P fontSize="12px">{description}</Heading.P>
      </PostHeadings>
    </PostHolder>
  );
};

const posts = [
  {
    title: "Jan 15, 2020 - 12:50 PM",
    description: "Big day for amazon devices.",
    imageSrc: "http://placekitten.com/g/50/50",
    icon: faFire,
  },
  {
    title: " Jan 15, 2020 - 12:50 PM",
    description: "Big day for amazon devices.",
    imageSrc: "http://placekitten.com/50/50",
    icon: faFish,
  },
];

export const PostsContainer = () => {
  return (
    <div>
      <Heading.H3 fontSize="14px" mb="20px">
        Recent Posts
      </Heading.H3>
      {posts.map(({ title, description, imageSrc, icon }) => {
        return (
          <Post
            key={_.uniqueId()}
            {...{ title, description, imageSrc, icon }}
          />
        );
      })}
    </div>
  );
};
