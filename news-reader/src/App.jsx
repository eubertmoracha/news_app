import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Politics from "./pages/Politics";
import Social from "./pages/Social";
import Economy from "./pages/Economy";
import Sports from "./pages/Sports";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/social" element={<Social />} />
        <Route path="/economy" element={<Economy />} />
        <Route path="/sports" element={<Sports />} />
      </Routes>
    </Router>
  );
}

export default App;
