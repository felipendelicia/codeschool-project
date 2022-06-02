import { Routes, Route, useLocation } from "react-router-dom";
import {AnimatePresence} from "framer-motion"
import Landing from "./views/Landing"

const AnimatedRoutes = () => {

  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;