import HomeIcon from "./assets/icons/dashboard.svg";
import AboutIcon from "./assets/icons/info.svg";
interface Route {
  path: string;
  name: string;
  icon?: React.ReactNode;
  description?: string;
}

const routes: Route[] = [
  {
    path: "/",
    name: "Home",
    icon: <img src={HomeIcon} alt="homeIcon" />,
    description: "Home page",
  },
  {
    path: "/about",
    name: "About",
    icon: <img src={AboutIcon} alt="aboutIcon" />,
    description: "About page",
  },
];

export { type Route, routes };
