import React, { Component } from 'react'

class SelectOptions extends Component{
    render(){
        return(
            <select defaultValue={this.props.value} onClick={(event)=> {this.props.handler(event.target.value)}}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading" id="currentlyReading">Currently Reading</option>
                <option value="wantToRead" id="wantToRead">Want to Read</option>
                <option value="read" id="read" >Read</option>
                <option value="none" id="none" >None</option>
            </select>
        )
    }
}

export default SelectOptions