import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export type styledProps = {
  width?: string;
  height?: string;
  background?: string;
};

export type iconProps = {
  icon: IconProp;
  iconColor: string;
};

const IconHolder = styled.div`
  border-radius: 100px;
  width: ${(props: styledProps) => props.width};
  height: ${(props: styledProps) => props.height};
  background-color: ${(props: styledProps) => props.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = ({
  icon,
  iconColor,
  width = "20px",
  height = "20px",
  background,
}: styledProps & iconProps) => {
  return (
    <IconHolder width={width} height={height} background={background}>
      <FontAwesomeIcon icon={icon} color={iconColor} />
    </IconHolder>
  );
};
