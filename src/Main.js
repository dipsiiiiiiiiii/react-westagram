import React from "react"
import './Main.css'
import './Common.css'

class Main extends React.Component {
    render(){
        return(
            <div>
                <nav>
      <div className="iconAndLogo">  
        <div className = "logoIcon"></div>
        <div className = "verticalLine"></div>
        <div className = "mainlogoImg"></div>
      </div>
      <div className="searchBoxContainer">
        <input className="searchBoxInput" type="text" placeholder="검색" />
        <div className="searchBox">검색</div>
        <div className="searchResult">
          <div className="firstSearch">wecode</div>
          <div className="secondSearch">weCode</div>
          <div className="thirdSearch">wew</div>
        </div>
      </div>
      <ul className="navList">
        <li className="searchImg"></li>
        <li className="heartImg"></li>
        <li className="peopleImg"></li>
      </ul>
    </nav>
    <main>
      <div className="total">
      <div className="feeds">
        <article>
          <header className="firstHeader">
            <div className="profilePhoto"></div>
            <div className="profileName">wecode_bootcamp</div>
          </header>
          <div className="feedPhoto">
            <img src="https://scontent-gmp1-1.cdninstagram.com/vp/7dd7d8e61047035d530ec7b8785e0e28/5E2E6E48/t51.2885-15/e35/69366856_2154583161509048_6271804732968189983_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=1" alt="아이유" />
          </div>
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
          <div className="commentUploadedBox">
            <ul className="commentList">
              <li><div className="userComment"><span>wecode_bootcamp </span>great!</div></li>
              <li className="secondList"><button type="button">댓글 <span className="commentSumNumber">500</span>개 모두 보기</button></li>
              <li><span style={{fontWeight:"bold"}}>dipsiiiiiiiiii </span>awesome!</li>
            </ul>
          </div>
          <div className="timeBox">1시간 전</div>
          <section className="commentWritingSection">
            <form className="commentForm">
              <input className="commentWriting" type="text" placeholder="댓글 달기..." />
              <button className="commentBtn" type="button">게시</button>
            </form>
          </section>
        </article>
      </div>
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
    </main>
            </div>

        )
    }
}

export default Main