import { useState } from "react";
import "./style/index.scss";
import Provider, { useProvider } from "./components/provider";
import { Link, useLocation } from "react-router-dom";
import routes, { Route } from "./routes";
import RouterView from "./components/router-view";
import Switch from "./components/switch";

const RouterLink = ({ route }: { route: Route }) => {
  const { pathname } = useLocation();
  const { path, name } = route;
  const isActive = pathname === path;
  const activeClass = "text-primary";
  return (
    <Link
      to={route.path}
      className={`${isActive && activeClass} text-lg  hover:text-primary`}
    >
      {route.name}
    </Link>
  );
};
const Nav = () => {
  return (
    <nav className="fixed right-1/2 translate-x-1/2 top-[1rem] flex justify-center items-center gap-[1em] px-[1em] h-[4rem]   rounded-lg shadow-lg align w-full lg:w-[60rem]   bg-slate-50 dark:bg-slate-800  text-slate-900 dark:text-slate-200">
      {routes.map((route) => {
        return <RouterLink key={route.path} route={route} />;
      })}
    </nav>
  );
};

type Mode = "light" | "dark";

function App() {
  const [mode, setMode] = useState<Mode>("dark");

  return (
    <Provider value={[mode, setMode]}>
      <div className={`${mode} `}>
        <div className=" min-h-[200rem] bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-200 pt-[6rem] ">
          <div className="absolute top-[1rem] right-[1rem] flex align-center gap-[1rem]">
            toggle mode
            <Switch
              checked={mode === "dark"}
              onChange={() => {
                setMode(mode === "light" ? "dark" : "light");
              }}
            />
          </div>
          <div className="container  mx-auto">
            <RouterView />
          </div>
        </div>
        <Nav />
      </div>
    </Provider>
  );
}

export default App;
