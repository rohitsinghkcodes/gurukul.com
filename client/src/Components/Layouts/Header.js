import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useAuth } from "../../Context/authContext.js";
import SearchComponent from "../Form/SearchComponent.js";
import useCategory from "../../hooks/useCourse.js";
import { useCart } from "../../Context/cartContext.js";
import { Badge, Space } from "antd";
import { BsCart3 } from "react-icons/bs";
import { PiSignOutDuotone } from "react-icons/pi";
import { MdSpaceDashboard } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { FaBoxOpen, FaRegUserCircle } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { toast } from "react-toastify";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const location = useLocation();
  const categories = useCategory();
  //clear storage and set auth details after logging out => handled by this funtion
  const handleLogOut = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });

    //clearing the local storage
    localStorage.removeItem("auth");
    toast.success("Signed Out Successfully!");
  };

  // Handle th ereload if already on homepage and clicked on the navbar brand
  const handleReload = () => {
    if (location.pathname === "/") {
      window.location.reload();
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary "
        data-bs-theme="light"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link
              to="/"
              className="navbar-brand"
              onClick={handleReload}
              style={{
                backgroundColor: "blueviolet",
                padding: "8px",
                borderRadius: "10px",
              }}
            >
              PORTFOLIO
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/papers" className="nav-link" href="#">
                    Research Papers
                  </Link>
                </li>
                <li className="nav-item">
                    <Link to={`/all-courses`} className="nav-link">
                      All Courses
                    </Link>
                  </li>
                {/* CATEGORIES DROPDOWN STARTS HERE */}
              
              </ul>
            </div>
            <div className="searchBox">
              <SearchComponent />
            </div>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              

              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link" href="#">
                      Sign In
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown mx-2">
                    <Link
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {/* Making fisrt letter of name capital */}
                      {auth.user.name[0].toUpperCase() +
                        auth.user.name.slice(1)}
                    </Link>
                    {/* Dropdown menu*/}
                    {auth?.user?.role === 0 ? (
                      // if user is non admin
                      <ul className="dropdown-menu dropdown-menu-lg-end">
                        <li>
                          <Link to="/profile" className="dropdown-item">
                            <FaRegUserCircle /> &nbsp; My Profile
                          </Link>

                          <Link to="/orders" className="dropdown-item ">
                            <FaBoxOpen /> &nbsp; My Orders
                          </Link>
                          <Link to="/contact" className="dropdown-item ">
                            <TfiHeadphoneAlt /> &nbsp; 24x7 Helpline
                          </Link>
                          <Link
                            to="/login"
                            onClick={handleLogOut}
                            className="dropdown-item"
                          >
                            <IoLogOut /> &nbsp; Sign Out
                          </Link>
                        </li>
                      </ul>
                    ) : (
                      // if user is admin
                      <ul className="dropdown-menu dropdown-menu-lg-end">
                        <li>
                          <Link
                            to={`/dashboard/${
                              auth?.user?.role === 1 ? "admin" : "user"
                            }`}
                            className="dropdown-item"
                          >
                            <MdSpaceDashboard /> &nbsp; Dashboard
                          </Link>
                          <Link
                            to="/login"
                            onClick={handleLogOut}
                            className="dropdown-item"
                          >
                            <IoLogOut /> &nbsp; Sign Out
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </>
              )}

              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
