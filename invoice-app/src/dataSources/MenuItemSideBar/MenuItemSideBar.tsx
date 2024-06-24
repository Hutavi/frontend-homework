import {
  AppstoreOutlined,
  PhoneOutlined,
  BarChartOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  HomeOutlined,
  SettingOutlined,
  ProductOutlined,
  LinkOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

export const items: MenuItem[] = [
  {
    key: "sub1",
    label: "Recent",
    type: "group",
    children: [
      {
        key: "home",
        label: "Home",
        icon: <HomeOutlined style={{ fontSize: "20px" }} />,
      },
      {
        key: "invoices",
        label: "Invoices",
        icon: <MoneyCollectOutlined style={{ fontSize: "20px" }} />,
      },
    ],
  },
  {
    key: "sub2",
    label: "Contractors",
    icon: <UserOutlined style={{ fontSize: "20px" }} />,
    children: [
      {
        key: "5",
        label: "Contractor 1",
        icon: <LinkOutlined style={{ fontSize: "18px" }} />,
      },
      {
        key: "6",
        label: "Contractor 2",
        icon: <BarChartOutlined style={{ fontSize: "18px" }} />,
      },
      {
        key: "sub3",
        label: "Contractor 3",
        icon: <PhoneOutlined style={{ fontSize: "20px" }} />,
        children: [
          { key: "7", label: "Connect Contractor", icon: <AppstoreOutlined /> },
          { key: "8", label: "Profile", icon: <UserOutlined /> },
        ],
      },
    ],
  },
  {
    key: "sub4",
    label: "Product Services",
    icon: <ProductOutlined style={{ fontSize: "20px" }} />,
  },
  {
    type: "divider",
  },
  {
    key: "grp",
    label: "Others",
    type: "group",
    children: [
      {
        key: "13",
        label: "Users",
        icon: <UsergroupAddOutlined style={{ fontSize: "20px" }} />,
      },
      {
        key: "14",
        label: "Statistics",
        icon: <BarChartOutlined style={{ fontSize: "20px" }} />,
      },
      {
        type: "divider",
      },
      {
        key: "15",
        label: "Settings",
        icon: <SettingOutlined style={{ fontSize: "20px" }} />,
      },
    ],
  },
];
