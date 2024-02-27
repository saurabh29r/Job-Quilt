import "./Navbar.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { FaHome } from "react-icons/fa";
import { MdMapsHomeWork } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";

function Navbar() {
  let navigate = useNavigate();

  const onclickLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login", { replace: true });
  };

  return (
    <>
      <nav className="bg-container d-none d-lg-flex">
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

      <nav
        className="d-lg-none bg-container"
        style={{ backgroundColor: "black" }}
      >
        <img
          src="https://res.cloudinary.com/djq9899ge/image/upload/v1708893915/jt3kn3j2ldhgpxhkpql9.png"
          alt="mobile-view-imgs"
          className="main-logos"
        />
        <ul className="mob-ul">
          <li className="logos">
            <Link to="/" className="mob-anchor">
              <FaHome />
            </Link>
          </li>
          <li className="logos">
            <Link to="/jobs" className="mob-anchor">
              <MdMapsHomeWork />
            </Link>
          </li>
          <li className="logos extra">
            <IoLogOut onClick={onclickLogout} />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
