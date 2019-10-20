import React, { Component } from 'react'
import './Feeds.scss'
import FeedsHeader from './feedsHeaderAndPhoto/FeedsHeaderAndPhoto'
import LikeSection from './likeSection/LikeSection'
import CommentUploadedBox from './commentUploadedBox/CommentUploadedBox'
import CommentWritingSection from './commentWritingSection/CommentWritingSection'

class Feeds extends Component {
    constructor(){
      super()
      this.state={
        value: '',
        items: [ ],
        opacity: 0.3
      }
    }

    handleSubmit = (e) => {
      e.preventDefault();

      const newItem = {
        value: this.state.value,
        id : Date.now()
      };
      if(this.state.value){
      this.setState((prevState) => ({
        items: prevState.items.concat(newItem),
        value: '',
        opacity: 0.3
        })
      )
    }
    }

    handleColor= (e)=>  {
      this.setState({value: e.target.value}
          , ()=>{
            let opacity = (this.state.value ? 1 : 0.3)
            this.setState({
              opacity
            })
          }
          )}

    render() {
        return (
            <div>
                <div className="feeds">
                  <article>
                    <FeedsHeader userId="wecode_bootcamp"
                    src="https://scontent-gmp1-1.cdninstagram.com/vp/7dd7d8e61047035d530ec7b8785e0e28/5E2E6E48/t51.2885-15/e35/69366856_2154583161509048_6271804732968189983_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=1"/>
                    <LikeSection />
                    <CommentUploadedBox items={this.state.items}/>
                    <CommentWritingSection
                      onChange={this.handleColor}
                      onSubmit={this.handleSubmit}
                      value={this.state.value}
                      opacity={this.state.opacity}/>
                  </article>
                </div>
            </div>
        )
    }
}

export default Feeds
