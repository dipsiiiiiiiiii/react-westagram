import React, { Component } from 'react'
import './FeedsHeaderAndPhoto.scss'

class FeedsHeaderAndPhoto extends Component {
    render() {
        return (
            <div>
                <header className="firstHeader">
                    <div className="profilePhoto"></div>
                    <div className="profileName">{this.props.userId}</div>
                </header>
                <div className="feedPhoto">
                      <img src={this.props.src} alt="아이유" />
                </div>
            </div>
        )
    }
}

export default FeedsHeaderAndPhoto
