import React, { Component } from 'react'
import './SearchBox.css'

class SearchBox extends Component {
    constructor(){
      super()
      this.state={
        resultDisplayStyle: "none",
        inputDisplayStyle: "none",
        searchDivDisplayStyle: "block"
      }
      this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(){
      this.setState({
        inputDisplayStyle: "block",
        searchDivDisplayStyle: "none"
      })
    }

    render() {
        return (
                <div className="searchBoxContainer">
                  <input
                    className="searchBoxInput"
                    style={{display: this.state.inputDisplayStyle }}
                    type="text" 
                    placeholder="검색" />
                  <div
                    style={{display: this.state.searchDivDisplayStyle}}
                    onClick={this.handleSearch}
                    className="searchBox">검색
                  </div>
                  <div
                    className="searchResult"
                    style={{display: this.state.resultDisplayStyle}}>
                      <div className="firstSearch">wecode</div>
                      <div className="secondSearch">weCode</div>
                      <div className="thirdSearch">wew</div>
                  </div>
                </div>
        )
    }
}

export default SearchBox
