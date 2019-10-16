import React, { Component } from 'react'
import './Feeds.css'

class Feeds extends Component {
    render() {
        return (
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
            </div>
        )
    }
}

export default Feeds
