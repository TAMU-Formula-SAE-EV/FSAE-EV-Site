import Home from "./pages/home/home";
import Sponsors from "./pages/sponsors/sponsors";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sponsors" element={<Sponsors/>} />
        </Routes>
      </Router>
  )
}

export default App
