import React from "react";
import styled from "styled-components";
import logo from "../../../assets/logo.svg";
const StyledLayout = styled.div`
  & {
    min-height: 100vh;
    background-color: #f3f3f3;
    padding-left: 7rem;
  }
  & > .up-bar {
    /* background-color: #fff; */
    height: 3rem;
  }
  & > .side-bar {
    position: fixed;
    top: 1rem;
    bottom: 1rem;
    left: 1rem;
    width: 5rem;
    background-color: #fff;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    & > .logo {
      margin-top: 1rem;
    }
    & > .routes {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      & > .route {
        .icon {
          fill: #000;
        }
      }
    }
  }
`;

StyledLayout.defaultProps = {
  theme: {
    mode: "light",
    dark: {
      background: "#202124",
      color: "#caced8",
    },
    light: {
      background: "#F7F3E3",
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
  icon: React.ReactNode;
  description?: string;
}

interface Props {
  children: React.ReactNode | React.ReactNode[];
  routes: Route[];
}

const Layout = (props: Props) => {
  return (
    <StyledLayout>
      <div className="up-bar">up bar</div>
      <div className="side-bar">
        <img width="100%" src={logo} alt="logo" className="logo" />
        <div className="routes">
          {props.routes.map((route) => (
            <div className="route" key={route.path}>
              {route.icon}
            </div>
          ))}
        </div>
      </div>
      <div className="router-view">{props.children}</div>
    </StyledLayout>
  );
};

export default Layout;
