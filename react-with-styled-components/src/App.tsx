import { routes } from "./route";
import RouterView from "./components/router-view";
import "./styles/index.scss";
import Layout from "./layouts/vertical/layout1";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
const defaultRoutes = [
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
    name: "About",
    path: "/about",
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
];

const theme = {
  mode: "light",
  dark: {
    background: "#202124",
    color: "#caced8",
  },
  light: {
    background: "#ffffff",
    color: "#202124",
  },
  palette: {
    primary: "#0da396",
    secondary: "#D6E4E5",
    error: "#E0144C",
    warning: "#F5A623",
    info: "#0D4C92",
    success: "#00FFD1",
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        className="App "
        style={{
          fontFamily: "sans-serif",
        }}
      >
        <Layout routes={routes}>
          <RouterView />
        </Layout>
        <ToastContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
