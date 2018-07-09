import React, { Component } from 'react';
import './Save.css'


class Save extends Component {
    constructor(){
        super()

        this.state = {
            
        }
    }


    render(){
        return(
            <div className="save-container">
                <button className="save" onClick={() => this.props.onClick()}>Save Meme</button>
            </div>
        )
    }
}

export default Save;