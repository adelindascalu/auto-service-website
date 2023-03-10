import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { GiTowTruck, GiPhone } from "react-icons/gi";
import { RiMapPinLine } from "react-icons/ri";

import { Link } from "react-router-dom";
import Button from "../Reusable-components/Button/Button";

import "./Footer.css";

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <footer className='footer'>
        <div className='container'>
          <div className='details-container'>
            <div className='detail-box'>
              <RiMapPinLine className='detail-icon'></RiMapPinLine>
              <p>
                2285 Driftwood Road
                <br /> Los Gatos, California
              </p>
            </div>

            <div className='detail-box'>
              <GiPhone className='detail-icon'></GiPhone>
              <p>Phone: 408-357-7676</p>
            </div>

            <div className='detail-box'>
              <GiTowTruck className='detail-icon'></GiTowTruck>
              <p>
                24/7 Roadside Assistance
                <br /> 408-357-7677
              </p>
            </div>
          </div>

          <div className='footer-container'>
            <div className='logo-col'>
              <Link className='logo-box logo' to='/'>
                AXD
              </Link>
              <div className='working-hours'>
                <p className='hours'>Mo-Sa: 07:00 - 22:00</p>
                <p className='hours'>Su: 08:00 - 16:00</p>
              </div>
              <ul className='social-links'>
                <li>
                  <Link className='footer-link' to='/'>
                    <FaFacebook className='social-icon' />
                  </Link>
                </li>
                <li>
                  <Link className='footer-link' to='/'>
                    <FaInstagram className='social-icon' />
                  </Link>
                </li>
                <li>
                  <Link className='footer-link' to='/'>
                    <FaTwitter className='social-icon' />
                  </Link>
                </li>
              </ul>

              <p className='copyright'>
                Copyright &copy;
                <span className='year'>{getCurrentYear()}</span> by AXD, Inc.
                All rights reserved.
              </p>
            </div>

            <div className='address-col'>
              <p className='footer-heading'>Our address</p>
              <address className='contacts'>
                <p className='address'>
                  2285 Driftwood Road, Los Gatos, California
                </p>

                <p>408-357-7676</p>
                <p>hello@axdservice.com</p>
              </address>
            </div>

            <div className='information-col'>
              <p className='footer-heading'>Information</p>
              <ul className='footer-nav'>
                <li>
                  <Link className='footer-link' to='/'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className='footer-link' to='/about'>
                    About
                  </Link>
                </li>
                <li>
                  <Link className='footer-link' to='/services'>
                    Services
                  </Link>
                </li>

                <li>
                  <Link className='footer-link' to='/contact'>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className='newsletter-col'>
              <p className='footer-heading'>Newsletter</p>
              <p className='newsletter-text'>
                Sign up today for hints, tips and latest offers
              </p>
              <input
                type='email'
                className='newsletter-input'
                placeholder='Email address'
                required
              ></input>
              <Button type='btn-light' text='Sign up'></Button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
