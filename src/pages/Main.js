import React from "react"
import Nav from "../nav/Nav"
import Feeds from "../feeds/Feeds"
import MainRight from "../mainRight/MainRight"
import './Main.css'
import '../pages/Common.css'


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