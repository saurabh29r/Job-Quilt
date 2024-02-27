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
          <h1 className="main-heading-logo"> JobQuilt </h1>
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
            className="btn btn-secondary btnss"
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
        <Link to="/">
          <h1 className=" mob-logo"> JobQuilt </h1>
        </Link>
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
