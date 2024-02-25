import "./Navbar.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Navbar() {
  let navigate = useNavigate();

  const onclickLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login", { replace: true });
  };

  return (
    <nav className="bg-container">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/djq9899ge/image/upload/v1708872863/xy7dmdruwkg5dju5bokx.png"
          alt="main-logo"
          className="main-logo"
        />
      </Link>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/jobs">Jobs</NavLink>
        </li>
        <button
          type="button"
          className="btn btn-secondary m-3"
          onClick={onclickLogout}
        >
          Logout
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
