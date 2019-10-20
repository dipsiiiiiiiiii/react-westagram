import React, { Component } from 'react'
import './UserInfo.scss'


class UserInfo extends Component {
    render() {
        const styles={
            backgroundImage: `url(${this.props.imgUrl})`,
            backgroundSize: "100%",
            width: this.props.width,
            height: this.props.height,
            borderRadius: "50%",
        }
        return (
            <div className="otherUserInfo">
                <div style={styles} className="otherUserImg"></div>
                <div className="otherUserBox">
                    <div className="otherUserId">{this.props.userId}</div>
                    <div className="otherUserDesc">{this.props.desc}</div>
                </div>
            </div> 
        )
    }
}

export default UserInfo