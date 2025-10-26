import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-md py-4 px-8 flex justify-evenly items-center">
      <h1 className="text-2xl font-bold text-blue-400 tracking-wide">
        News<span className="text-white">Reader</span>
      </h1>

      <NavLink
        to="/"
        className={({ isActive }) =>
          `font-medium text-gray-200 hover:text-blue-400 transition duration-200 ${
            isActive ? "font-bold text-blue-400 border-b-2 border-blue-400" : ""
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/politics"
        className={({ isActive }) =>
          `font-medium text-gray-200 hover:text-blue-400 transition duration-200 ${
            isActive ? "font-bold text-blue-400 border-b-2 border-blue-400" : ""
          }`
        }
      >
        Politics
      </NavLink>

      <NavLink
        to="/social"
        className={({ isActive }) =>
          `font-medium text-gray-200 hover:text-blue-400 transition duration-200 ${
            isActive ? "font-bold text-blue-400 border-b-2 border-blue-400" : ""
          }`
        }
      >
        Social
      </NavLink>

      <NavLink
        to="/economy"
        className={({ isActive }) =>
          `font-medium text-gray-200 hover:text-blue-400 transition duration-200 ${
            isActive ? "font-bold text-blue-400 border-b-2 border-blue-400" : ""
          }`
        }
      >
        Economy
      </NavLink>

      <NavLink
        to="/sports"
        className={({ isActive }) =>
          `font-medium text-gray-200 hover:text-blue-400 transition duration-200 ${
            isActive ? "font-bold text-blue-400 border-b-2 border-blue-400" : ""
          }`
        }
      >
        Sports
      </NavLink>
    </nav>
  );
}
