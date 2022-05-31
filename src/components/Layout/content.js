import React from "react";

import { Layout } from "antd";

const { Content } = Layout;

const AppContent = ({ children }) => {
  return (
    <Content
      style={{
        background: "white",
        minHeight: "calc(100vh - 135px)",
        marginTop: "65px",
      }}
    >
      {children}
    </Content>
  );
};

export default AppContent;
