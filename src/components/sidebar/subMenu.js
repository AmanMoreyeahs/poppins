import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #000000;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 15px;
  //   font-family: 'Roboto', sans-serif;
  font-weight: 500;
  line-height: 18px;
  &:hover {
    background: #e37826;
    cursor: pointer;
    color: #ffffff;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #ffffff;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000000;
  font-family: Roboto;
  font-size: 15px;
  line-height: 18px;
  text-align: left;
  &:hover {
    cursor: pointer;
    color: #e37826;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>{item.icon}</div>
          <div>
            <SidebarLabel>{item.title}</SidebarLabel>
          </div>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
