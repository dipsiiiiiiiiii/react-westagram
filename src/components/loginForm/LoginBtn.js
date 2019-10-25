import React, {Component}from "react"
import { withRouter } from "react-router-dom"

class LoginBtn extends Component {

    goToMain=()=>{
        this.props.history.push('/main');
    }

    checkUser=()=>{
        fetch('http://10.58.5.82:8000/login/signin', {
            method: 'post',
            body: JSON.stringify({
                email: this.props.email,
                password: this.props.password
                })
            })
            .then(res => res.json())
            .then(res=>{console.log(res)
                if(res.JsonWebToken) {
                    this.goToMain()
                    localStorage.setItem('token',res.JsonWebToken)
                } 
                else {
                    alert("아이디 혹은 비밀번호가 틀립니다.")
                }
            })
        }

    render(){
        const {backgroundOpacity} = this.props;
        return(
            <div>
                <button
                    className="loginBtn"
                    style={{opacity: backgroundOpacity}}
                    onClick={this.checkUser}
                    >로그인</button>
            </div>
        )}
}

export default withRouter(LoginBtn)