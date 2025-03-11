import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-evenly flex-wrap mt-5  bg-lime-500 p-3 text-white font-bold rounded-lg">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `rounded-lg p-1 ${
            isActive ? "bg-green-700 text-white" : "hover:bg-green-700"
          }`
        }
      >
        <>CricScore</>
      </NavLink>
      <NavLink
        to="Current"
        className={({ isActive }) =>
          `rounded-lg p-1 ${
            isActive ? "bg-green-700 text-white" : "hover:bg-green-700"
          }`
        }
      >
        <>CurrentMatches</>
      </NavLink>

      <NavLink
        to="Player"
        className={({ isActive }) =>
          `rounded-lg p-1 ${
            isActive ? "bg-green-700 text-white" : "hover:bg-green-700"
          }`
        }
      >
        <>PlayersList</>
      </NavLink>

      <NavLink
        to="SeriesList"
        className={({ isActive }) =>
          `rounded-lg p-1 ${
            isActive ? "bg-green-700 text-white " : "hover:bg-green-700"
          }`
        }
      >
        <>SeriesList</>
      </NavLink>

      <NavLink
        to="SeriesSearch"
        className={({ isActive }) =>
          `rounded-lg p-1 ${
            isActive ? "bg-green-700 text-white" : "hover:bg-green-700"
          }`
        }
      >
        <>SeriesSearch</>
      </NavLink>
    </div>
  );
};

export default Navbar;
