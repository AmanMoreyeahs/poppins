import React from "react";
import { Layout } from "antd";
import { AppHeader } from "./header";
import { AppContent } from "./content";

const AppLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh", overflow: "hidden" }}>
      <AppHeader />
      <AppContent>{children}</AppContent>
    </Layout>
  );
};

export default AppLayout;
