import React, { Component } from 'react';
import './style.css';

import Search from '../Search/Search';


class NavBar extends Component {
  constructor(props) {
    super(props);
    this._handleOnSearchChange = this._handleOnSearchChange.bind(this);
  }

  _handleOnSearchChange(event){
    this.props.onSearchChange(event.target.value)
  }

  render() {
    const {app_title, value} = this.props;
    return(
      <header className="site-navbar border-bottom" role="banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-9 col-xl-2">
              <h1 className="mb-0">{app_title}</h1>
            </div>
            <div className="col-10 col-md-8 d-none d-xl-block">
              <Search value={value} onChange={this._handleOnSearchChange} />
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default NavBar
