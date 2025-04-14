import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="px-2 py-4 shadow-2xl bg-zinc-700 flex justify-between items-center sticky top-0">
      {/* for heading and logo  */}
      <div>
        <h1 className="text-xl font-semibold font-serif">Hello Folks 👋</h1>
      </div>
      {/* for routing -> Here will be Navlinks  */}
      <div className="w-[75%] flex justify-around font-semibold">
        <NavLink
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className={({ isActive }) =>
            isActive ? `shadow-lg font-bold px-3 ` : "px-3"
          }
        >
          AboutMe
        </NavLink>
        <NavLink
          to="/skills"
          onClick={() => window.scrollTo(0, 0)}
          className={({ isActive }) =>
            isActive ? `shadow-lg font-bold px-3 ` : "px-3"
          }
        >
          Skills
        </NavLink>
        <NavLink
          to="/projects"
          onClick={() => window.scrollTo(0, 0)}
          className={({ isActive }) =>
            isActive ? `shadow-lg font-bold px-3 ` : "px-3"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/certifications"
          onClick={() => window.scrollTo(0, 0)}
          className={({ isActive }) =>
            isActive ? `shadow-lg font-bold px-3 ` : "px-3"
          }
        >
          Certifications
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => window.scrollTo(0, 0)}
          className={({ isActive }) =>
            isActive ? `shadow-lg font-bold px-3 ` : "px-3"
          }
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
