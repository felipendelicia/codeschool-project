import { Routes, Route, useLocation } from "react-router-dom";
import {AnimatePresence} from "framer-motion"
import Landing from "./views/Landing"
import Step from "./views/Step";
import stepsRouting from "./steps/stepsRouting.json"
import Content from "./components/Content";

const AnimatedRoutes = () => {

  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        {
            stepsRouting.map((step, i)=>{
                return(
                    <Route path={step.path} key={i} element={
                      <Content/>
                    }/>
                )
            })
        }
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;