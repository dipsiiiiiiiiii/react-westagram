import React, { Component } from 'react'
import './SearchBox.scss'

class SearchBox extends Component {
    constructor(){
      super()
      this.state={
        resultDisplayStyle: "none",
        inputDisplayStyle: "none",
        searchDivDisplayStyle: "block"
      }
    }

    handleSearch = () => {
      this.setState({
        inputDisplayStyle: "block",
        searchDivDisplayStyle: "none"
      })
    }

    render() {
      const {
        inputDisplayStyle,
        searchDivDisplayStyle,
        resultDisplayStyle
      } = this.state
        return (
                <div className="searchBoxContainer">
                  <input
                    className="searchBoxInput"
                    style={{display: inputDisplayStyle }}
                    type="text" 
                    placeholder="검색" />
                  <div
                    style={{display: searchDivDisplayStyle}}
                    onClick={this.handleSearch}
                    className="searchBox">검색
                  </div>
                  <div
                    className="searchResult"
                    style={{display: resultDisplayStyle}}>
                      <div className="searchBoxResult">wecode</div>
                      <div className="ssearchBoxResult">weCode</div>
                      <div className="tsearchBoxResult">wew</div>
                  </div>
                </div>
        )
    }
}

export default SearchBox
