import React from "react";
import logosite from "../../assets/icons/logoW.png";
import homeIcon from "../../assets/icons/home.svg";
import aboutIcon from "../../assets/icons/about.svg";
import contactIcon from "../../assets/icons/contact.svg";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className=" m-0 navbar position-fixed top-0 start-50 w-100 translate-middle-x translate-middle navbar-expand-lg navbar-dark bar-color">
      <div className="container-fluid">
        <div className="logo_section">
          <a href="/">
            <img src={logosite} alt="" width="40" />
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <img src={homeIcon} alt="" />
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <img src={aboutIcon} alt="" />
              <a className="nav-link" href="/About">
                <img src="" alt="" />
                About
              </a>
            </li>
            <li className="nav-item">
              <img src={contactIcon} alt="" />
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <form className="account_section">
          <Link to={'/Register'}>
            <button className="navbar-btn">Create account</button>
          </Link>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
