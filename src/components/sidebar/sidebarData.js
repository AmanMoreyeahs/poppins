import React from "react";
import {
  HomeOutlined,
  ShopOutlined,
  UpOutlined,
  DownOutlined,
  ShoppingCartOutlined,
  CalendarOutlined,
  DollarCircleOutlined,
  PayCircleOutlined,
  ArrowRightOutlined,
  FileMarkdownOutlined,
  UsergroupAddOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { SettingOutlined } from "@ant-design/icons";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <HomeOutlined />,
  },
  {
    title: "My Shop",
    path: "/myshop",
    icon: <ShopOutlined />,
    iconClosed: <DownOutlined />,
    iconOpened: <UpOutlined />,

    subNav: [
      {
        title: "Catalog",
        path: "/myshop/catalog",
        icon: <ArrowRightOutlined />,
        cName: "sub-nav",
      },
      {
        title: "Products",
        path: "/myshop/products",
        icon: <ArrowRightOutlined />,
        cName: "sub-nav",
      },
      {
        title: "Shop Setting",
        path: "/services/services3",
        icon: <ArrowRightOutlined />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Orders",
    path: "/orders",
    icon: <ShoppingCartOutlined />,
  },
  {
    title: "Appointments",
    path: "/appointment",
    icon: <CalendarOutlined />,
  },
  {
    title: "Offers",
    path: "/offers",
    icon: <DollarCircleOutlined />,
    iconClosed: <DownOutlined />,
    iconOpened: <UpOutlined />,

    subNav: [
      {
        title: "Promotions",
        path: "/offers/promotions",
        icon: <ArrowRightOutlined />,
      },
      {
        title: "Points Rule",
        path: "/offers/pointrule",
        icon: <ArrowRightOutlined />,
      },
      {
        title: "Coupons",
        path: "/offers/coupons",
        icon: <ArrowRightOutlined />,
      },
      {
        title: "Vouchers",
        path: "/offers/vouchers",
        icon: <ArrowRightOutlined />,
      },
    ],
  },
  {
    title: "Marketing",
    path: "/marketing",
    icon: <FileMarkdownOutlined />,
    iconClosed: <DownOutlined />,
    iconOpened: <UpOutlined />,

    subNav: [
      {
        title: "Campaign",
        path: "/marketing/campaign",
        icon: <ArrowRightOutlined />,
      },
      {
        title: "Broadcast",
        path: "/marketing/broadcast",
        icon: <ArrowRightOutlined />,
      },
      {
        title: "Automation",
        path: "/marketing/automation",
        icon: <ArrowRightOutlined />,
      },
      {
        title: "Announcement",
        path: "/marketing/announcement",
        icon: <ArrowRightOutlined />,
      },
      {
        title: "Survey",
        path: "/marketing/survey",
        icon: <ArrowRightOutlined />,
      },
      {
        title: "Reviews",
        path: "/marketing/review",
        icon: <ArrowRightOutlined />,
      },
      {
        title: "Templates",
        path: "/marketing/template",
        icon: <ArrowRightOutlined />,
      },
    ],
  },
  {
    title: "Queries",
    path: "/queries",
    icon: <QuestionCircleOutlined />,
    iconClosed: <DownOutlined />,
    iconOpened: <UpOutlined />,

    subNav: [
      {
        title: "Leads",
        path: "/queries/lead",
        icon: <ArrowRightOutlined />,
      },
      {
        title: "Complaints",
        path: "/queries/complaint",
        icon: <ArrowRightOutlined />,
      },
      {
        title: "Chats",
        path: "/queries/chat",
        icon: <ArrowRightOutlined />,
      },
      {
        title: "Calls",
        path: "/queries/call",
        icon: <ArrowRightOutlined />,
      },
    ],
  },
  {
    title: "Customers",
    path: "/customer",
    icon: <UsergroupAddOutlined />,
    iconClosed: <DownOutlined />,
    iconOpened: <UpOutlined />,

    subNav: [
      {
        title: "Customers",
        path: "/customer/customer",
        icon: <ArrowRightOutlined />,
      },
      {
        title: "Segments",
        path: "/customer/segment",
        icon: <ArrowRightOutlined />,
      },
      {
        title: "Tier",
        path: "/customer/tier",
        icon: <ArrowRightOutlined />,
      },
      {
        title: "Customer Type",
        path: "/customer/c-type",
        icon: <ArrowRightOutlined />,
      },
    ],
  },
  {
    title: "Payment",
    path: "/payment",
    icon: <PayCircleOutlined />,
    iconClosed: <DownOutlined />,
    iconOpened: <UpOutlined />,
    subNav: [
      {
        title: "Payment History",
        path: "payment/history",
        icon: <ArrowRightOutlined />,
      },
      {
        title: "Transaction stats",
        path: "payment/stats",
        icon: <ArrowRightOutlined />,
      },
    ],
  },
  {
    title: "settings",
    path: "/setting",
    icon: <SettingOutlined />,
    iconClosed: <DownOutlined />,
    iconOpened: <UpOutlined />,

    subNav: [
      {
        title: "Language",
        path: "/setting/lamguage",
        icon: <ArrowRightOutlined />,
      },
      {
        title: "Location",
        path: "/setting/location",
        icon: <ArrowRightOutlined />,
      },
      {
        title: "Time Zone",
        path: "/setting/time",
        icon: <ArrowRightOutlined />,
      },
      {
        title: "Master Data",
        path: "/setting/master",
        icon: <ArrowRightOutlined />,
      },
      {
        title: "Payment Configuration",
        path: "/setting/configuration",
        icon: <ArrowRightOutlined />,
      },
      {
        title: "Survey Alerts",
        path: "/setting/alert",
        icon: <ArrowRightOutlined />,
      },
      {
        title: "Integrations",
        path: "/setting/integration",
        icon: <ArrowRightOutlined />,
      },
    ],
  },
];
