import React, {Component}from "react"

class UserId extends Component {
    render() {
        return(
            <div>
                <input 
                className="inputId" 
                type="text" 
                placeholder="전화번호, 사용자 이름 또는 이메일" />
            </div>
        )
    }
}

export default UserId