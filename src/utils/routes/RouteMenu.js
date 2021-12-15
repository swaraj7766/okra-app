import { DashboardOutlined, DeploymentUnitOutlined } from "@ant-design/icons";

let RouteMenu = [
  {
    name: "Dashboard",
    icon: <DashboardOutlined />,
    routes: [
      {
        path: "/",
        name: "Overview",
      },
      {
        path: "/switch",
        name: "Switch",
      },
      {
        path: "/cwr",
        name: "CWR",
      },
    ],
  },
  {
    name: "Deployment",
    icon: <DeploymentUnitOutlined />,
    routes: [
      {
        path: "/ztp",
        name: "ZTP",
      },
      {
        path: "/sitemanagement",
        name: "Site Mangement",
      },
    ],
  },
];

export default RouteMenu;
