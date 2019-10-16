import React, { Component } from 'react'

class MainRight extends Component {
    render() {
        return (
            <div>
                <div className="mainRight">
                  <div className="rightProfile">
                    <div className="rightProfileImg"></div>
                    <div className="rightProfileBox">
                      <div className="rightProfileUserId">wecode_bootcamp</div>
                      <div className="rightProfileUserName">WeCode | 위코드</div>
                    </div>
                  </div>
                  <div className="rightStory">
                    <div className="rightRecommendTop">
                      <span className="rightRecommendTopTitle">스토리</span>
                      <span className="rightRecommendTopSeeAll">모두 보기</span>
                    </div>
                    <div className="firstStory">
                      <div className="rightProfileImg"></div>
                      <div className="rightProfileBox">
                        <div className="rightProfileUserId">wecode_bootcamp</div>
                        <div className="rightProfileUserName">3시간 전</div>
                      </div>
                    </div>
                    <div className="secondStory">
                      <div className="rightProfileImg"></div>
                      <div className="rightProfileBox">
                        <div className="rightProfileUserId">wecode_bootcamp</div>
                        <div className="rightProfileUserName">2시간 전</div>
                      </div>
                    </div>
                    <div className="thirdStory">
                      <div className="rightProfileImg"></div>
                      <div className="rightProfileBox">
                        <div className="rightProfileUserId">wecode_bootcamp</div>
                        <div className="rightProfileUserName">1시간 전</div>
                      </div>
                    </div>
                  </div>
                  <div className="rightRecommend">
                    <div className="rightRecommendTop">
                      <span className="rightRecommendTopTitle">회원님을 위한 추천</span>
                      <span className="rightRecommendTopSeeAll">모두 보기</span>
                    </div>
                    <div className="firstRecommend">
                      <div className="rightProfileImg"></div>
                      <div className="rightProfileBox">
                        <div className="rightProfileUserId">wecode_bootcamp</div>
                        <div className="rightProfileUserName">회원님을 팔로우합니다</div>
                      </div>
                    </div>
                    <div className="secondRecommend">
                      <div className="rightProfileImg"></div>
                      <div className="rightProfileBox">
                        <div className="rightProfileUserId">wecode_bootcamp</div>
                        <div className="rightProfileUserName">회원님을 팔로우합니다</div>
                      </div>
                    </div>
                    <div className="thirdRecommend">
                      <div className="rightProfileImg"></div>
                      <div className="rightProfileBox">
                        <div className="rightProfileUserId">wecode_bootcamp</div>
                        <div className="rightProfileUserName">회원님을 팔로우합니다</div>
                      </div>
                    </div>
                  </div>
                  <div className="info">
                    <ul className="infoList">
                      <li>instagram 정보</li>
                      <li>지원</li>
                      <li>홍보 센터</li>
                      <li>API</li>
                      <li>채용 정보</li>
                      <li>개인정보처리방침</li>
                      <li>약관</li>
                      <li>디렉터리</li>
                      <li>프로필</li>
                      <li>해시태그</li>
                      <li>언어</li>
                    </ul>
                  </div>
                </div>
            </div>
        )
    }
}

export default MainRight
