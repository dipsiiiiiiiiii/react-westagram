import React, { Component } from 'react'
import UserInfo from '../userInfo/UserInfo'
import './StoryBox.scss'

class StoryBox extends Component {
    render() {
        const {data} = this.props;
        return ( 
            <div className="rightStory">
                <div className="rightRecommendTop">
                    <span className="rightRecommendTopTitle">{this.props.topLeft}</span>
                    <span className="rightRecommendTopSeeAll">{this.props.topRight}</span>
                </div>
                {data.map(el=> {
                    return (
                        <UserInfo
                        userId={el.storyUserId}
                        desc={el.desc}
                        imgUrl={el.storyImgUrl}
                        width={el.width}
                        height={el.height}
                        />
                    )
                })}
    
            </div> 
        )
    }
}

export default StoryBox
