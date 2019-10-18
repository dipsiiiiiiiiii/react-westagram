import React from "react"

class UserInput extends React.Component {
    render(){
        return(
            <div>
                <input onChange={this.props.onChange}
                    value={this.props.value}
                    className={this.props.className}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    name={this.props.name} />
            </div>
        )
    }
}

export default UserInput