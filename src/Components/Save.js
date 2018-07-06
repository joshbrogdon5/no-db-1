import React, { Component } from 'react';


class Save extends Component {
    constructor(){
        super()

        this.state = {
            
        }
    }


    render(){
        return(
            <div>
                <button onClick={() => this.props.onClick()}>Save Meme</button>
            </div>
        )
    }
}

export default Save;