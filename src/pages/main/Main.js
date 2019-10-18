import React from "react"
import Nav from "../../components/nav/Nav"
import Feeds from "../../components/feeds/Feeds"
import MainRight from "../../components/mainRight/MainRight"
import './Main.css'
import '../../styles/Common.css'


class Main extends React.Component {
    render(){
        return(
            <div>
              <Nav />
              <main>
                <div className="total">
                <Feeds />
                <MainRight />
                </div>
              </main>
            </div>

        )
    }
}

export default Main