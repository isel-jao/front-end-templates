import HomeIcon from "./assets/icons/dashboard.svg";
import AboutIcon from "./assets/icons/info.svg";
interface Route {
  path: string;
  name: string;
  icon: React.ReactNode;
  description?: string;
  color?: string;
}

const routes: Route[] = [
  {
    path: "/",
    name: "Home",
    icon: (
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M3.8,6.6h16.4" />
        <path d="M20.2,12.1H3.8" />
        <path d="M3.8,17.5h16.4" />
      </svg>
    ),
    description: "Home page",
    color: "#FF8C00",
  },
  {
    path: "/about",
    name: "About",
    icon: (
      <svg className="icon" viewBox="0 0 24 24">
        <path
          d="M6.7,4.8h10.7c0.3,0,0.6,0.2,0.7,0.5l2.8,7.3c0,0.1,0,0.2,0,0.3v5.6c0,0.4-0.4,0.8-0.8,0.8H3.8
        C3.4,19.3,3,19,3,18.5v-5.6c0-0.1,0-0.2,0.1-0.3L6,5.3C6.1,5,6.4,4.8,6.7,4.8z"
        />
        <path d="M3.4,12.9H8l1.6,2.8h4.9l1.5-2.8h4.6" />
      </svg>
    ),
    description: "About page",
    color: "#F54888",
  },
];

export { type Route, routes };
