import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Router>
        <div>
          <Link to="/home">
            <Button variant="primary">Home</Button>
          </Link>
        </div>

        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
