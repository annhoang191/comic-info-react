import React from 'react';
import './style.css';

const NavBar = ({app_title}) => {
  return(
    <header className="site-navbar border-bottom" role="banner">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-6 col-xl-2" data-aos="fade-down">
            <h1 className="mb-0">{app_title}</h1>
          </div>
          <div className="col-10 col-md-8 d-none d-xl-block" data-aos="fade-down">
            <nav className="site-navigation position-relative text-right text-lg-center" role="navigation">
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar
