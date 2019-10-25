import React, { Component } from 'react'
import { Link } from "react-router-dom"
import {withRouter} from "react-router-dom"
import './IconAndLogo.scss'

class IconAndLogo extends Component {

    logOut = () => {
      localStorage.removeItem('token', "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0OH0.qiy26W8js_HMd_xDKp_KmAlSH7iHz0mt-W92rfY8Ef0")
      this.props.history.push('/')
    }

    render() {
        return (
                <div className="iconAndLogo">  
                  <button 
                    onClick={this.logOut}
                    className = "logoIcon"></button>
                  <div className = "verticalLine"></div>
                  <Link to="/" className = "mainlogoImg"><div className = "mainlogoImg"></div></Link>
                </div>
        )
    }
}
export default withRouter(IconAndLogo)
