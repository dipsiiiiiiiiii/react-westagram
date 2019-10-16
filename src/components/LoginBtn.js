import React, {Component}from "react"

class LoginBtn extends Component {
    render(){
        const {backgroundOpacity} = this.props;
        return(
            <div>
                <button className="loginBtn" style={{opacity: backgroundOpacity}}>로그인</button>
            </div>
        )}
}

export default LoginBtn