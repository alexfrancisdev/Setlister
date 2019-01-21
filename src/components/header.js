import React from 'react';

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return (
      <header>
        <nav>
          <div className="nav-left">
            <ul>
              <li><img className="logo" src="../assets/icons/logo.png" alt=""/></li>
              <li className="green">Explore</li>
              <li>News</li>
              <li>Top Setlists</li>
            </ul>
          </div>
          <div className="nav-right">
            <ul>
              <li>Profile</li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
