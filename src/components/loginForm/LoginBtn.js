import React, {Component}from "react"
import { Link } from "react-router-dom"

class LoginBtn extends Component {
    render(){
        const {backgroundOpacity} = this.props;
        return(
            <div>
                <Link to="/main"><button className="loginBtn" style={{opacity: backgroundOpacity}}>로그인</button></Link>
            </div>
        )}
}

export default LoginBtn