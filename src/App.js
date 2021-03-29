import './App.css';

import Startpage from "./LandingPage/pages/Startpage/Startpage"
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      <Startpage/>
    </div>
    </Router>
  );
}

export default App;
