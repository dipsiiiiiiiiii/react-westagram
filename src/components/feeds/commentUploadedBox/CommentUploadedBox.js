import React, { Component } from 'react'
import './CommentUploadedBox.css'

class CommentUploadedBox extends Component {

    constructor(){
        super()
        this.state={

        }
    }
    
    render() {
        return (
            <div>
                <div className="commentUploadedBox">
                    <ul className="commentList">
                        <li><div className="userComment"><span>wecode_bootcamp </span>great!</div></li>
                        <li className="secondList"><button type="button">댓글 <span className="commentSumNumber">500</span>개 모두 보기</button></li>
                        <li><span style={{fontWeight:"bold"}}>dipsiiiiiiiiii </span>awesome!</li>
                        {this.props.items.map((item)=>(
                            <li key={item.id}><span style={{fontWeight: "bold"}}>wecode_bootcamp </span>{item.value}</li>
                        ))}
                    </ul>
                </div>
                <div className="timeBox">1시간 전</div>  
            </div>
        )
    }
}

export default CommentUploadedBox
