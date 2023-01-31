import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Router>
        <div>
          <Link to="/home">
            <Button variant="primary">Home</Button>
          </Link>
          <Link to="/proyectos">
            <Button variant="primary">Proyectos</Button>
          </Link>
        </div>

        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/proyectos" element={<Projects />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
