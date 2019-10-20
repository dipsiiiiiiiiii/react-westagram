import React, { Component } from 'react'
import './CommentWritingSection.css'

class CommentWritingSection extends Component {
    render() {
        return (
            <section className="commentWritingSection">
                <form className="commentForm"
                    onSubmit={this.props.onSubmit}>
                    <input
                        onChange={this.props.onChange}
                        className="commentWriting"
                        value={this.props.value}
                        type="text"
                        placeholder="댓글 달기..." />
                    <button
                        className="commentBtn" 
                        type="submit"
                        style={{opacity: this.props.opacity}}>게시
                    </button>
                </form>
            </section>    
        )
    }
}

export default CommentWritingSection
