import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Holder = styled.div`
  background-color: #f3f5fb;
  width: 30px;
  height: 30px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  margin: 0px 4px;
`;

export const IconHolder = ({ icon }: { icon: IconProp }) => {
  return (
    <Holder>
      <FontAwesomeIcon icon={icon} />
    </Holder>
  );
};
