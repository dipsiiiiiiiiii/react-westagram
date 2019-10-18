import React, {Component}from "react"
import { Link } from "react-router-dom"

class LogoImg extends Component {
    render() {
        return(
            <Link to="/main"><div className="logoImg"></div></Link>
        )
    }
}

export default LogoImg