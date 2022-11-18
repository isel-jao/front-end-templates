import { routes } from "./route";
import RouterView from "./components/router-view";
import "./styles/index.scss";
import Layout from "./layouts/horizontal/layout1";

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
function App() {
  return (
    <div
      className="App "
      style={{
        fontFamily: "sans-serif",
      }}
    >
      <Layout routes={routes}>
        <RouterView />
      </Layout>
    </div>
  );
}

export default App;
