import React, { Component } from 'react'
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <div>
                <nav>
                <div className="iconAndLogo">  
                  <div className = "logoIcon"></div>
                  <div className = "verticalLine"></div>
                  <div className = "mainlogoImg"></div>
                </div>
                <div className="searchBoxContainer">
                  <input className="searchBoxInput" type="text" placeholder="검색" />
                  <div className="searchBox">검색</div>
                  <div className="searchResult">
                    <div className="firstSearch">wecode</div>
                    <div className="secondSearch">weCode</div>
                    <div className="thirdSearch">wew</div>
                  </div>
                </div>
                <ul className="navList">
                  <li className="searchImg"></li>
                  <li className="heartImg"></li>
                  <li className="peopleImg"></li>
                </ul>
              </nav>
            </div>
        )
    }
}

export default Nav
