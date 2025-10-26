// src/App.jsx
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
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />

        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/politics" element={<Politics />} />
            <Route path="/social" element={<Social />} />
            <Route path="/economy" element={<Economy />} />
            <Route path="/sports" element={<Sports />} />
          </Routes>
        </main>

        <footer className="text-center py-6 text-gray-600 border-t bg-transparent">
          © {new Date().getFullYear()} News Reader. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
