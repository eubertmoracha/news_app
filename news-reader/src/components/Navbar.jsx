// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import "../App.css"; // ensure CSS is loaded for this component

export default function Navbar() {
  return (
    <nav className="nav-root">
      <div className="nav-inner">
        <div className="logo">News Reader</div>

        {/* links container */}
        <div className="nav-links">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/politics" className="nav-link">Politics</NavLink>
          <NavLink to="/economy" className="nav-link">Economy</NavLink>
          <NavLink to="/social" className="nav-link">Social</NavLink>
          <NavLink to="/sports" className="nav-link">Sports</NavLink>
        </div>
      </div>
    </nav>
  );
}
