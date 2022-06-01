import React from "react";

import { Layout } from "antd";

const { Content } = Layout;

export const AppContent = ({ children }) => {
  return (
    <Content
      style={{
        background: "white",
        minHeight: "calc(100vh - 135px)",
        marginTop: "15px",
      }}
    >
      {children}
    </Content>
  );
};
