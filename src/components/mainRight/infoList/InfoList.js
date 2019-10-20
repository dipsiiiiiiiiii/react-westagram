import React, { Component } from 'react'
import './InfoList.scss'

class InfoList extends Component {
    render() {
        return (
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
        )
    }
}

export default InfoList
