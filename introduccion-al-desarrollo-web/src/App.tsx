import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Router>
        <AnimatedRoutes/>
      </Router>
    </div>
  );
}

export default App;
