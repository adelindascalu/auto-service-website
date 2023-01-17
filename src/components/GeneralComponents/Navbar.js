import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../Reusable-components/Button/Button";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <>
      <header className='header'>
        <Link className='logo-box' to='/'>
          <h2 className='logo'>AXD</h2>
        </Link>
        <nav className='main-nav'>
          <ul className={nav ? "main-nav-list active" : "main-nav-list"}>
            <li>
              <Link className='main-nav-link' to='/' onClick={handleNav}>
                Home
              </Link>
            </li>
            <li>
              <Link className='main-nav-link' to='/about' onClick={handleNav}>
                About
              </Link>
            </li>
            <li>
              <Link
                className='main-nav-link'
                to='/services'
                onClick={handleNav}
              >
                Services
              </Link>
            </li>
            <li>
              <Link className='main-nav-link' to='/contact' onClick={handleNav}>
                Contact
              </Link>
            </li>
            <Button type='btn-light' text='Book Now' />
          </ul>
        </nav>

        <button className='hamburger' onClick={handleNav}>
          {nav ? (
            <IoMdClose className='hamburger-icon' />
          ) : (
            <FaBars className='hamburger-icon' />
          )}
        </button>
      </header>
    </>
  );
}

export default Navbar;
