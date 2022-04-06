import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/trend">Trending</NavLink>
        </li>
        <li>
          <NavLink to="/recent">Most Recent</NavLink>
        </li>
        <li>
          <NavLink to="/explore">Explore</NavLink>
        </li>
        <li>
          <NavLink to="/animal">Animal</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
