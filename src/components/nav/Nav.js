import React, { Component } from 'react'
import './Nav.scss'
import IconAndLogo from './iconAndLogo/IconAndLogo'
import SearchBox from './searchBox/SearchBox'
import NavList from './navList/NavList'


class Nav extends Component {
    render() {
        return (
            <div>
                <nav>
                <IconAndLogo />
                <SearchBox />
                <NavList />
              </nav>
            </div>
        )
    }
}

export default Nav
