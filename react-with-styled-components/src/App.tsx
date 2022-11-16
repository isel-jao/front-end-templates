import Layout from "./layouts/horizontal/layout1";
import { routes } from "./route";
import RouterView from "./components/router-view";
import "./styles/index.scss";
function App() {
  return (
    <div className="App">
      <Layout routes={routes}>
        <RouterView />
      </Layout>
    </div>
  );
}

export default App;
