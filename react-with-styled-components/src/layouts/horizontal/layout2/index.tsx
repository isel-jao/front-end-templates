import styled from "styled-components";
import { Link } from "react-router-dom";
import { Children, useState } from "react";
import { lighten, rgba } from "polished";
import ToolTip from "../../../components/tooltip";
import { useLocation } from "react-router-dom";

const Nav = styled.div`
  position: fixed;
  font-size: 10px;
  top: 1em;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  min-width: 40em;
  width: 80%;
  max-width: 80em;
  border-radius: 0.5em;
  background-color: #1d1d27;

  .wraper {
    position: relative;
    display: flex;
    align-items: end;
    padding: 0 3em;
    height: 6em;
    width: fit-content;
    gap: 3em;
    .link {
      position: relative;
      cursor: pointer;
      height: 4em;
      width: 4em;
      .background {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 0em;
        width: 0em;
        border-radius: 50%;
      }
      &.active {
        top: 1em;
        height: 6em;
        width: 6em;
        .background {
          top: 1em;
          height: 6em;
          width: 6em;
          animation: slide-up 0.75s ease-out;
        }
        .icon {
          stroke-dasharray: 80;
          animation: draw 1.5s ease forwards;
          top: 2em;

          width: 4em;
        }
      }
      margin-bottom: 1em;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon {
        top: 0.5em;
        width: 3em;
        position: absolute;
        fill: transparent;
        stroke: white;
        transition: all 0.5s ease-out;
      }
    }
    .active-indicator {
      position: absolute;
      top: 100%;
      width: 12em;
      transform: translateY(-1.2em) rotateX(180deg);
      transition: left 0.5s ease;
    }
  }
  @keyframes slide-up {
    0% {
      height: 4em;
      width: 4em;
    }
    100% {
      height: 6em;
      width: 6em;
    }
  }
  @keyframes strok {
    0% {
      stroke-dashoffset: 400;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
  @keyframes draw {
    0% {
      stroke-dashoffset: 80;
    }
  }
`;

interface Route {
  path: string;
  name: string;
  icon: React.ReactNode;
  color?: string;
}
const defaultRoutes: Route[] = [
  {
    name: "Home",
    path: "/",
    icon: (
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M3.8,6.6h16.4" />
        <path d="M20.2,12.1H3.8" />
        <path d="M3.8,17.5h16.4" />
      </svg>
    ),
    color: "#FF8C00",
  },
  {
    name: "Home",
    path: "/",
    icon: (
      <svg className="icon" viewBox="0 0 24 24">
        <path
          d="M6.7,4.8h10.7c0.3,0,0.6,0.2,0.7,0.5l2.8,7.3c0,0.1,0,0.2,0,0.3v5.6c0,0.4-0.4,0.8-0.8,0.8H3.8
        C3.4,19.3,3,19,3,18.5v-5.6c0-0.1,0-0.2,0.1-0.3L6,5.3C6.1,5,6.4,4.8,6.7,4.8z"
        />
        <path d="M3.4,12.9H8l1.6,2.8h4.9l1.5-2.8h4.6" />
      </svg>
    ),
    color: "#F54888",
  },
  {
    name: "Home",
    path: "/",
    icon: (
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M3.4,11.9l8.8,4.4l8.4-4.4" />
        <path d="M3.4,16.2l8.8,4.5l8.4-4.5" />
        <path d="M3.7,7.8l8.6-4.5l8,4.5l-8,4.3L3.7,7.8z" />
      </svg>
    ),
    color: "#4343F5",
  },
  {
    name: "Home",
    path: "/",
    icon: (
      <svg className="icon" viewBox="0 0 24 24">
        <path
          d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1
          C3.9,4.4,4.4,3.9,5.1,3.9z"
        />
        <path d="M4.2,9.3h15.6" />
        <path d="M9.1,9.5v10.3" />
      </svg>
    ),
    color: "#E0B115",
  },
  {
    name: "Home",
    path: "/",
    icon: (
      <svg
        className="icon"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.78723 20.3077L15.942 11.5107C16.3061 11.1607 16.8708 11.128 17.273 11.4335L22 15.0241M22 15.0241V19.2821C22 19.8485 21.5408 20.3077 20.9744 20.3077H3.02564C2.4592 20.3077 2 19.8485 2 19.2821V3.89743C2 3.33099 2.4592 2.87179 3.02564 2.87179H20.9744C21.5408 2.87179 22 3.33099 22 3.89744V15.0241Z"
          stroke="#fff"
          stroke-width="0.909091"
        />
        <ellipse
          cx="8.41026"
          cy="10.0513"
          rx="1.79487"
          ry="1.53846"
          stroke="#fff"
          stroke-width="0.909091"
        />
      </svg>
    ),
    color: "#65DDB7",
  },
  {
    name: "About",
    path: "/about",
    icon: (
      <svg
        className="icon"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.78723 20.3077L15.942 11.5107C16.3061 11.1607 16.8708 11.128 17.273 11.4335L22 15.0241M22 15.0241V19.2821C22 19.8485 21.5408 20.3077 20.9744 20.3077H3.02564C2.4592 20.3077 2 19.8485 2 19.2821V3.89743C2 3.33099 2.4592 2.87179 3.02564 2.87179H20.9744C21.5408 2.87179 22 3.33099 22 3.89744V15.0241Z"
          stroke="#fff"
          stroke-width="0.909091"
        />
        <ellipse
          cx="8.41026"
          cy="10.0513"
          rx="1.79487"
          ry="1.53846"
          stroke="#fff"
          stroke-width="0.909091"
        />
      </svg>
    ),
    color: "#65DDB7",
  },
];

interface Props {
  routes: Route[];
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  const [routes, setRoutes] = useState(props.routes);
  const location = useLocation();
  return (
    <div
      className=" h-screen"
      style={{
        backgroundColor: lighten(
          0.15,
          routes.find((route) => route.path === location.pathname)?.color ||
            "#bebbbb"
        ),
        transition: "background-color 0.75s ease",
        padding: "7em 2em 2em 2em",
        overflowY: "auto",
      }}
    >
      <Nav>
        <div className="wraper">
          <svg
            className="active-indicator"
            style={{
              left: `${
                routes.findIndex((route) => route.path === location.pathname) *
                7
              }em`,
            }}
            width="247"
            height="43"
            viewBox="0 0 247 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M247 42.9999C183 42.9999 178 6.68457e-05 123.5 -0.00012207C69 -0.000310986 56 42.9999 0 42.9999C0 42.9999 55.2928 42.9999 123.5 42.9999C191.707 42.9999 247 42.9999 247 42.9999Z"
              fill="#1D1D27"
            />
          </svg>

          {routes.map((route, index) => (
            <ToolTip
              style={{
                backgroundColor: rgba(route.color || "#0000007f", 0.5),
              }}
              key={index}
              tooltip={route.name}
            >
              <Link
                to={route.path}
                onClick={() => {
                  const newRoutes = routes.map((r) => ({
                    ...r,
                    isActive: false,
                  }));
                  newRoutes[index].isActive = true;
                  setRoutes(newRoutes);
                }}
                className={`link  ${
                  location.pathname == route.path && "active"
                }`}
              >
                <div
                  className="background"
                  style={{
                    background:
                      route.path == location.pathname
                        ? route.color
                        : "transparent",
                  }}
                ></div>
                {route.icon}
              </Link>
            </ToolTip>
          ))}
        </div>
      </Nav>
      <div
        style={{
          fontSize: "1.5em",
          fontWeight: "bold",
        }}
        className=" h-full"
      >
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
