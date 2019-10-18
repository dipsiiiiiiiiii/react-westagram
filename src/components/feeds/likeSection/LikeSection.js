import React, { Component } from 'react'
import "./LikeSection.css"

class LikeSection extends Component {
    render() {
        return (
            <div>
                <div className="photoBottom">
                    <ul className= "profileList">
                        <li className="profileHeartImg"></li>
                        <li className="profileBalloonImg"></li>
                        <li className="profileShareImg"></li>
                    </ul>
                    <div className="bookmarkImg"></div>
                </div> 
                <div className="likeSection">
                    <div>좋아요 <span className="likeSum">13</span>개</div>
                </div>
            </div>
        )
    }
}

export default LikeSection
