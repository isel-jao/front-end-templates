import dashboardIcon from "./assets/icons/dashboard.svg";
import infoIcon from "./assets/icons/info.svg";
interface Route {
  path: string;
  name: string;
  icon?: React.ReactNode;
  description?: string;
}

const routes: Route[] = [
  {
    path: "/",
    name: "home",
    icon: <img src={dashboardIcon} alt="dashboard" />,
    description: "Dashboard",
  },
  {
    path: "/about",
    name: "about",
    icon: <img src={infoIcon} alt="info" />,
    description: "About",
  },
];
export { type Route };
export default routes;
