import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home";
import AboutPage from "../../pages/about";
const RouterView = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
};

export default RouterView;
