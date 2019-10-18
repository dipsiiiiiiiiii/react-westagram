import React, { Component } from 'react'
import './MainRight.css'
import StoryBox from './storyBox/StoryBox'
import InfoList from './infoList/InfoList'
import UserInfo from './userInfo/UserInfo'
import mainRightData from './MainRightData'
import mainRightRecom from './MainRightRecom'

class MainRight extends Component {
    render() {
        return (
            <div>
                <div className="mainRight">
                  <UserInfo 
                    imgUrl="https://scontent-icn1-1.cdninstagram.com/vp/91a4a6cf425350138a196ba4df885b9b/5DFE2D10/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"
                    userId="wecode_bootcamp" 
                    desc="WeCode|위코드" 
                    width="50px" 
                    height="50px"
                    />
                  <StoryBox 
                    topLeft="스토리"
                    topRight="모두 보기"
                    data={mainRightData}
                    />
                  <StoryBox 
                    topLeft="회원님을 위한 추천"
                    topRight="모두 보기"
                    data={mainRightRecom}/>
                  <InfoList />
                </div>
            </div>
        )
    }
}

export default MainRight
