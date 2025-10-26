// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `font-medium px-3 py-2 rounded-md transition-colors ${
      isActive ? "text-white bg-blue-600" : "text-gray-200 hover:text-white"
    }`;

  return (
    <nav className="bg-gray-900 shadow-md py-3">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-white font-bold text-lg">News Reader</div>

        <div className="flex space-x-2">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/politics" className={linkClass}>
            Politics
          </NavLink>
          <NavLink to="/economy" className={linkClass}>
            Economy
          </NavLink>
          <NavLink to="/social" className={linkClass}>
            Social
          </NavLink>
          <NavLink to="/sports" className={linkClass}>
            Sports
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
