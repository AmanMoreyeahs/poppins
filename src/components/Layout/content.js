import React from "react";

import { Layout } from "antd";
import Sidebar from "../sidebar/sidebar";

const { Content } = Layout;

export const AppContent = ({ children }) => {
  return (
    <Content
      style={{
        background: "#F4F5FD",
        minHeight: "calc(100vh - 135px)",
      }}
    >
      <div style={{ display: "flex",marginTop:"20px", }}>
        <div>
          <Sidebar />
        </div>
        <div style={{height:"100vh",background:"white",width:"100%",margin:"0px 1.2%",borderRadius:"12px"}}>{children}</div>
      </div>
    </Content>
  );
};
