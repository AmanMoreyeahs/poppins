import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SidebarData } from "./sidebarData";
import SubMenu from "./subMenu";

const SidebarNav = styled.nav`
  background: #ffffff;
  width: 256px;
  height: 100vh;
  display: flex;
  justify-content: center;
//   position: fixed;
  top: 1;
  transition: 350ms;
  z-index: 10;
  border-radius: 0 12px 12px 0;
`;

const SidebarWrap = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const Sidebar = () => {
  return (
    <>
      <SidebarNav>
        <SidebarWrap>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
