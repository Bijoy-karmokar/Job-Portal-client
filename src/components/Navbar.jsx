import React, { use } from "react";
import logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router";
import Button from "./Button";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "LogOut successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-lg text-white bg-blue-600" : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      {
        user &&  <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-lg text-white bg-blue-600" : ""
          }
          to="/applications"
        >
          My Application
        </NavLink>
      </li>
      }
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-1">
          <img className="w-20" src={logo} alt="" />
          <Link to="/" className="text-3xl font-bold ">
            Job Portal
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <Button type={"SignOut"} onClick={handleSignOut}></Button>
        ) : (
          <>
            <Link to="/logIn">
              <Button type={"LogIn"}></Button>
            </Link>
            <Link to="/register">
              <Button type={"Register"}></Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
