import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/all-images/bita-logo.png";

// import Button from "../Button";
import NavLinks from "../NewNavbar/NavLink";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="absolute w-full z-20 ">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between ">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-12 " />
          <div
            className="text-3xl md:hidden text-slate-400"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins] text-white z-30 ">
          <li>
            <Link to="/" className="py-7 px-3 inline-block ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="py-7 px-3 inline-block ">
              About Us
            </Link>
          </li>
          <div className="z-20">
            <NavLinks />
          </div>

          <li>
            <Link to="/technologies" className="py-7 px-3 inline-block">
              Technologies
            </Link>
          </li>
          <li>
            <Link to="/solution" className="py-7 px-3 inline-block">
              Solution
            </Link>
          </li>

          <li>
            <Link to="/contactus" className="py-7 px-3 inline-block">
              Contact us
            </Link>
          </li>
          {/* <li>
            <Link to="/contactboos" className="py-7 px-3 inline-block">
              Mobile App Development
            </Link>
          </li> */}
        </ul>
        <div className="md:block hidden ">{/* <Button /> */}</div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white z-20 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="py-7 px-3 inline-block">
              About Us
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/technologies" className="py-7 px-3 inline-block">
              Technologies
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Solution
            </Link>
          </li>

          <li>
            <Link to="/contactus" className="py-7 px-3 inline-block ">
              Contact us
            </Link>
          </li>
          <div className="py-5">{/* <Button /> */}</div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
