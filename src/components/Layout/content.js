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
      <div className="mt-20 flex-d mb-20">
        <div>
          <Sidebar />
        </div>
        <div className="content-div">{children}</div>
      </div>
    </Content>
  );
};
