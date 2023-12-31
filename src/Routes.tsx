import { Routes, Route, useLocation } from "react-router-dom";
import subjectsRoutes from "./data/subjects-routes";
import MainMenu from "./pages/MainMenu";
import Landing from "./pages/Landing";
import SubjectPage from "./pages/SubjectPage";

export default function AllRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Landing />} />
      <Route path="/intro" element={<MainMenu />} />
      
      {/* Creo una ruta por cada una de las subjects (ej: HTML, CSS)*/}
      {subjectsRoutes.map((subject, i) => {
        return (
          <Route
            path={subject.path}
            key={i}
            element={<SubjectPage subject={subject.name} />}
          />
        );
      })}
    </Routes>
  );
}
