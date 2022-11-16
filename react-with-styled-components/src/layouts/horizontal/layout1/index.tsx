import styled from "styled-components";
import { darken, lighten, rgba } from "polished";
import { Link, useLocation } from "react-router-dom";

const StyleLayout = styled.div`
  ${({ theme }) => theme[theme.mode]};
  min-height: 100vh;
  padding-top: 6em;
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    &.darken {
      background-color: ${({ theme }) =>
        darken(0.1, theme[theme.mode].background)};
    }
    &.lighten {
      background-color: ${({ theme }) =>
        lighten(0.1, theme[theme.mode].background)};
    }
    &.blur {
      backdrop-filter: blur(10px);
      background-color: ${({ theme }) =>
        theme.mode === "dark" ? rgba(0, 0, 0, 0.2) : rgba(255, 255, 255, 0.2)};
    }

    .link {
      color: inherit;
      text-decoration: none;
      text-transform: capitalize;
      font-size: 1.5em;
      &.active {
        color: ${({ theme }) => theme.palette.primary};
      }
    }
  }
`;

StyleLayout.defaultProps = {
  theme: {
    mode: "light",
    dark: {
      background: "#202124",
      color: "#caced8",
    },
    light: {
      background: "#caced8",
      color: "#202124",
    },
    palette: {
      primary: "#0D4C92",
      secondary: "#D6E4E5",
      error: "#E0144C",
      warning: "#F5A623",
      info: "#0D4C92",
      success: "#00FFD1",
    },
  },
};

interface Route {
  path: string;
  name: string;
}

interface Props {
  children: React.ReactNode;
  routes: Route[];
}

const RouterLink = ({ route }: { route: Route }) => {
  const location = useLocation();
  const isActive = location.pathname === route.path;
  return (
    <Link className={`link ${isActive && "active"}`} to={route.path}>
      {route.name}
    </Link>
  );
};

const Layout = ({ children, routes }: Props) => {
  return (
    <StyleLayout>
      <nav className="nav blur">
        {routes.map((route) => (
          <RouterLink key={route.path} route={route} />
        ))}
      </nav>
      {children}
    </StyleLayout>
  );
};

export default Layout;
