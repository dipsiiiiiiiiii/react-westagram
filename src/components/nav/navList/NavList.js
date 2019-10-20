import React, { Component } from 'react'
import './NavList.scss'

class NavList extends Component {
    render() {
        return (
            <div>
               <ul className="navList">
                  <li className="searchImg"></li>
                  <li className="heartImg"></li>
                  <li className="peopleImg"></li>
                </ul> 
            </div>
        )
    }
}

export default NavList
