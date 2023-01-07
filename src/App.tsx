import {BrowserRouter as Router} from 'react-router-dom'
import AllRoutes from './AllRoutes';
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;
