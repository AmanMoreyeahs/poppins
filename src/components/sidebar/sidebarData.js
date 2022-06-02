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
import { ROUTES } from "../../route/constant";
import { TITLE } from "./constant";

export const SidebarData = [
  {
    title: TITLE.HOME,
    path: ROUTES.HOME,
    icon: <HomeOutlined />,
  },
  {
    title: TITLE.MY_SHOP,
    path: ROUTES.MY_SHOP,
    icon: <ShopOutlined />,
    iconClosed: <DownOutlined />,
    iconOpened: <UpOutlined />,

    subNav: [
      {
        title: TITLE.CATALOG,
        path: ROUTES.MY_SHOP_CATALOG,
        icon: <ArrowRightOutlined />,
      },
      {
        title: TITLE.PRODUCTS,
        path: "#",
        icon: <ArrowRightOutlined />,
      },
      {
        title: TITLE.SHOP_SETTING,
        path: "#",
        icon: <ArrowRightOutlined />,
      },
    ],
  },
  {
    title: TITLE.ORDERS,
    path: "#",
    icon: <ShoppingCartOutlined />,
  },
  {
    title: TITLE.APPOINTMENTS,
    path: "#",
    icon: <CalendarOutlined />,
  },
  {
    title: TITLE.OFFERS,
    path: "#",
    icon: <DollarCircleOutlined />,
    iconClosed: <DownOutlined />,
    iconOpened: <UpOutlined />,

    subNav: [
      {
        title: TITLE.PROMOTIONS,
        path: "#",
        icon: <ArrowRightOutlined />,
      },
      {
        title: TITLE.POINTS_RULE,
        path: "#",
        icon: <ArrowRightOutlined />,
      },
      {
        title: TITLE.COUPONS,
        path: "#",
        icon: <ArrowRightOutlined />,
      },
      {
        title: TITLE.VOUCHERS,
        path: "#",
        icon: <ArrowRightOutlined />,
      },
    ],
  },
  {
    title: TITLE.MARKETING,
    path: "#",
    icon: <FileMarkdownOutlined />,
    iconClosed: <DownOutlined />,
    iconOpened: <UpOutlined />,

    subNav: [
      {
        title: TITLE.CAMPAIGN,
        path: "#",
        icon: <ArrowRightOutlined />,
      },
      {
        title: TITLE.BROADCAST,
        path: "#",
        icon: <ArrowRightOutlined />,
      },
      {
        title: TITLE.AUTOMATION,
        path: "#",
        icon: <ArrowRightOutlined />,
      },
      {
        title: TITLE.ANNOUNCEMENT,
        path: "#",
        icon: <ArrowRightOutlined />,
      },
      {
        title: TITLE.SURVEY,
        path: "#",
        icon: <ArrowRightOutlined />,
      },
      {
        title: TITLE.REVIEWS,
        path: "#",
        icon: <ArrowRightOutlined />,
      },
      {
        title: TITLE.TEMPLATES,
        path: "#",
        icon: <ArrowRightOutlined />,
      },
    ],
  },
  {
    title: TITLE.QUERIES,
    path: "#",
    icon: <QuestionCircleOutlined />,
    iconClosed: <DownOutlined />,
    iconOpened: <UpOutlined />,

    subNav: [
      {
        title: TITLE.LEADS,
        path: "#",
        icon: <ArrowRightOutlined />,
      },
      {
        title: TITLE.COMPLAINTS,
        path: "#",
        icon: <ArrowRightOutlined />,
      },
      {
        title: TITLE.CHATS,
        path: "#",
        icon: <ArrowRightOutlined />,
      },
      {
        title: TITLE.CALLS,
        path: "#",
        icon: <ArrowRightOutlined />,
      },
    ],
  },
  {
    title: TITLE.CUSTOMERS,
    path: "#",
    icon: <UsergroupAddOutlined />,
    iconClosed: <DownOutlined />,
    iconOpened: <UpOutlined />,

    subNav: [
      {
        title: TITLE.CUSTOMERS,
        path: "#",
        icon: <ArrowRightOutlined />,
      },
      {
        title: TITLE.SEGMENTS,
        path: "#",
        icon: <ArrowRightOutlined />,
      },
      {
        title: TITLE.TIER,
        path: "#",
        icon: <ArrowRightOutlined />,
      },
      {
        title: TITLE.CUSTOMER_TYPE,
        path: "#",
        icon: <ArrowRightOutlined />,
      },
    ],
  },
  {
    title: TITLE.PAYMENT,
    path: "#",
    icon: <PayCircleOutlined />,
    iconClosed: <DownOutlined />,
    iconOpened: <UpOutlined />,
    subNav: [
      {
        title: TITLE.PAYMENT_HISTORY,
        path: "#",
        icon: <ArrowRightOutlined />,
      },
      {
        title: TITLE.PAYMENT_STATS,
        path: "#",
        icon: <ArrowRightOutlined />,
      },
    ],
  },
  {
    title: TITLE.SETTINGS,
    path: "#",
    icon: <SettingOutlined />,
    iconClosed: <DownOutlined />,
    iconOpened: <UpOutlined />,

    subNav: [
      {
        title: TITLE.LANGUAGE,
        path: "#",
        icon: <ArrowRightOutlined />,
      },
      {
        title: TITLE.LOCATION,
        path: "#",
        icon: <ArrowRightOutlined />,
      },
    ],
  },
];
