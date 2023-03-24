import _ from "lodash";
import { useState } from "react";
import styled from "styled-components";
import { Icons } from "../../icons/Icons";
import { NavList } from "../../Nav";

const Container = styled.div`
  width: 200px;
  transition: 0.5s;
  ${({ isNavbarCollapsed }: { isNavbarCollapsed: boolean }) =>
    isNavbarCollapsed &&
    `
  width:45px;
`}
`;

const Header = styled.div`
  display: flex;
  padding: 0px 20px;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  height: 50px;
  ${({ isNavbarCollapsed }: { isNavbarCollapsed: boolean }) =>
    isNavbarCollapsed &&
    `
  padding:0px;
`}
`;

const IconHolder = styled.div`
  padding: 0px 10px;
  transition: 0.5s;
  align-items: center;
  display: flex;
  :hover {
    cursor: pointer;
  }
  ${({ isNavbarCollapsed }: { isNavbarCollapsed: boolean }) =>
    isNavbarCollapsed &&
    `
  transform:rotate(180deg)
`}
`;

const TitleHolder = styled.div`
  height: 100%;
`;

const NavTitle = styled.div`
  padding: 0px 20px;
  height: 50px;
  display: flex;
  align-items: center;
  transition: 0.5s;
  :hover {
    background: #f5f6ff;
    cursor: pointer;
    border-left: 4px solid #7149c6;
  }
`;

const TitleNavbar = ({
  header,
  titleKey,
}: {
  header: string;
  titleKey: string;
}) => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);
  const titleObject: any = NavList.find((item: any) => item[titleKey]);

  const collapseNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  return (
    <Container isNavbarCollapsed={isNavbarCollapsed}>
      <Header isNavbarCollapsed={isNavbarCollapsed}>
        {!isNavbarCollapsed && <p>{header}</p>}
        <IconHolder
          isNavbarCollapsed={isNavbarCollapsed}
          onClick={collapseNavbar}
        >
          <Icons.Arrow></Icons.Arrow>
        </IconHolder>
      </Header>
      {!isNavbarCollapsed && (
        <TitleHolder>
          {titleObject[titleKey].map((titleObj: { title: string }) => {
            return <NavTitle key={_.uniqueId()}>{titleObj.title}</NavTitle>;
          })}
        </TitleHolder>
      )}
    </Container>
  );
};

export default TitleNavbar;
