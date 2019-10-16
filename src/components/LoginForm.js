import React, {Component}from "react"
import UserId from "./UserId"
import UserPw from "./UserPw"
import LoginBtn from "./LoginBtn"

class LoginForm extends Component {
    render() {
        return(
            <div className="loginForm">
                <UserId />
                <UserPw />
                <LoginBtn />
                <div className="lostPw">비밀번호를 잊으셨나요?</div>
            </div>
        )
    }
}

export default LoginForm