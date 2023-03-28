import { faEye } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { BarChart } from "../../Chart";
import { Icon } from "../Icon/Icon";
import { Heading } from "../Typography/Heading";

const EyeHolder = styled.div`
  display: flex;
  height: 60px;
  padding-left: 20px;
`;

const NumbersHolder = styled.div`
  display: flex;
  align-items: center;
`;

const ImpressionsHolder = styled.div`
  margin-left: 10px;
`;

export const ChartContainer = () => {
  return (
    <>
      <EyeHolder>
        <Icon
          icon={faEye}
          iconColor="#ff9601"
          width="60px"
          height="60px"
          background="#fff5ea"
        />
        <ImpressionsHolder>
          <Heading.P fontSize="12px" mb="10px">
            POST IMPRESSIONS
          </Heading.P>
          <NumbersHolder>
            <Heading.H3 fontSize="24px">10,650</Heading.H3>
            <Heading.P fontSize="12px" color="#41c93f" ml="14px">
              +5.5%
            </Heading.P>
          </NumbersHolder>
        </ImpressionsHolder>
      </EyeHolder>
      <BarChart />
    </>
  );
};
