import React, {Component}from "react"
import LoginBtn from "./LoginBtn"
import UserInput from "./UserInput"

class LoginForm extends Component {
    constructor(){
        super()
        this.state={
            opacity: 0.3,
            userId: '',
            userPw: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            if(this.state.userId && this.state.userPw){
                this.setState({
                    opacity: 1
                })
            }
            else {
                this.setState({
                    opacity: 0.3
                })
            }
        })
    }

    render() {
        return(
            <div className="loginForm">
                <UserInput
                    onChange={this.handleChange}
                    value={this.state.userId}
                    className="userInput"
                    type="text"
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                    name="userId"/>
                <UserInput
                    onChange={this.handleChange}
                    value={this.state.userPw}
                    className="userInput"
                    type="password"
                    placeholder="비밀번호"
                    name="userPw" />
                <LoginBtn backgroundOpacity={this.state.opacity}/>
                <div className="lostPw">비밀번호를 잊으셨나요?</div>
            </div>
        )
    }
}

export default LoginForm