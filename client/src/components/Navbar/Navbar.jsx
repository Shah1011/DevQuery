import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import decode from "jwt-decode";

import logo from "../../assets/logo.png";
import Avatar from "../../components/Avatar/Avatar";
import "./Navbar.css";
import { setCurrentUser } from "../../actions/currentUser";
import bars from "../../assets/bars-solid.svg";

const Navbar = ({ handleSlideIn }) => {
  const dispatch = useDispatch();
  var User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      dispatch({ type: "LOGOUT" });
      navigate("/");
      dispatch(setCurrentUser(null));
    }
  };

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [User?.token, dispatch]);

  return (
    <nav className="main-nav">
      <div className="navbar">
        <button className="slide-in-icon" onClick={() => handleSlideIn()}>
          <img src={bars} alt="bars" width="15" />
        </button>
        <div className="navbar-1">
          <Link to="/" className="nav-item nav-logo">
            <img src={logo} alt="logo" />
          </Link>
          {/* <form>
            <input type="text" style={{ backgroundColor: "#252627", border: "1px solid"  }} placeholder=" Search..." />
            <img src={search} alt="search" width="18" className="search-icon" />
          </form> */}
        </div>
        <div className="navbar-2">
          {User === null ? (
            <>
            <Link to="/Auth" className="nav-item nav-links">
              Sign in
            </Link>
            </>
          ) : (
            <div className="flex gap-4 ml-4">
              <Link
                to={`/Users/${User?.result?._id}`}
                style={{ color: "white", textDecoration: "none" }}
              >
              <Avatar
                backgroundColor="#009dff"
                borderRadius="100%"
                color="white"
                px="15px"
                py="8px"
              >
                  {User.result.name.charAt(0).toUpperCase()}
              </Avatar>
                </Link>
              <button className="nav-item nav-links" onClick={handleLogout}>
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
