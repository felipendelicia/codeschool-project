import { Routes, Route, useLocation } from "react-router-dom";
import contentsRouting from "./data/contentsRouting";
import Intro from "./pages/Intro";
import Landing from "./pages/Landing";
import Learn from "./pages/Learn";

export default function AllRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Landing />} />
      <Route path="/intro" element={<Intro />} />
      {contentsRouting.map((content, i) => {
        return (
          <Route
            path={content.path}
            key={i}
            element={<Learn subject={content.name} />}
          />
        );
      })}
    </Routes>
  );
}
