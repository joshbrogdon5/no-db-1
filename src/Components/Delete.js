import React, { Component } from 'react';
import './Delete.css'


class Delete extends Component {
    constructor(){
        super()

        this.state = {
            
        }
    }



    render(){
        return(
            <div className="delete-container">
                <button className="delete" onClick={() => this.props.onClick()}>Delete Meme</button>
            </div>
        )
    }
}

export default Delete;