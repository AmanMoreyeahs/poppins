import React from "react";
import { Layout } from "antd";
import { AppHeader } from "./header";
import { AppContent } from "./content";
import "./index.css";
import { Footer } from "./footer";

const AppLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh", overflow: "hidden" }}>
      <AppHeader />
      <AppContent>{children}</AppContent>
      <Footer/>
    </Layout>
  );
};

export default AppLayout;
