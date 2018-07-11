import React, { Component } from 'react';
import './Save.css'
import axios from 'axios';

class Save extends Component {
    constructor(){
        super()

        this.state = {
            savedMemes: []
        }
    }

    saveMeme(){

        axios.put('/api/savedMemes', {savedMeme: this.state.meme}).then(results => {
            this.setState({
                savedMemes: results.data
            })
            
        })
      }

    render(){
        return(
            <div className="save-container">
                <button className="save" onClick={() => this.saveMeme()} >Save Meme</button>
            </div>
        )
    }
}

export default Save;