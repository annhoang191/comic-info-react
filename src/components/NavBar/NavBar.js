import React from 'react';
import './style.css';

import Search from '../Search/Search';

const NavBar = ({app_title}) => {
  return(
    <header className="site-navbar border-bottom" role="banner">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-9 col-xl-2">
            <h1 className="mb-0">{app_title}</h1>
          </div>
          <div className="col-10 col-md-8 d-none d-xl-block">
            <Search />
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar
