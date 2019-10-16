import React, {Component}from "react"

class UserPw extends Component {
    render() {
        return(
            <div>
                <input 
                className="inputPassword" 
                type="password" 
                placeholder="비밀번호" />
            </div>
        )
    }
}

export default UserPw