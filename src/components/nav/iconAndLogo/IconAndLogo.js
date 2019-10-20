import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './IconAndLogo.scss'

class IconAndLogo extends Component {
    render() {
        return (
                <div className="iconAndLogo">  
                  <div className = "logoIcon"></div>
                  <div className = "verticalLine"></div>
                  <Link to="/" className = "mainlogoImg"><div className = "mainlogoImg"></div></Link>
                </div>
        )
    }
}
export default IconAndLogo
