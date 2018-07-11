import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './reset.css'
import axios from 'axios';
import Save from './Components/Save';
import Delete from './Components/Delete';
import Title from './Components/Title';
import Meme from './Components/Meme'
import Saved from './Components/Saved'




class App extends Component {
  constructor(){
    super()

    this.state = {
      memesToDisplay: [],
      savedMemes: [],
      meme: {name: "", url: ""},
      currentMeme: 0,
      displayFirstMeme: {}
    }
    this.generateMeme=this.generateMeme.bind(this);
    this.displayFirstMeme=this.displayFirstMeme.bind(this)
  }

  componentDidMount(){
    axios.get('/api/allMemes').then((result) => {
      this.setState({
        memesToDisplay: result.data.memes
      })
    })
  } 

generateMeme(){
  this.setState({
    meme: this.state.memesToDisplay[this.state.currentMeme],
    currentMeme: this.state.currentMeme + 1
  })
}

displayFirstMeme(){
  axios.get('/api/firstMeme').then( result => {
    console.log(result)
    return result
    // this.setState({
    //   displayFirstMeme: result
    // })
  })
}


deleteMeme(){
  axios.delete('/api/savedMemes/:id', {savedMeme: this.state.meme.id}).then(results => {
    this.setState({
      savedMemes: results.data
    })
  })
}

  render() {
    let displaySavedMemes = this.state.savedMemes.map((e,i) => {//it is currently being saved in the savedMemes array in save.js
    return(
      <div>  
       <Meme 
       title={() => this.displayTitle()}
       />
       <img key={i} src={e.url}/> 
       <Delete
       onClick={() => this.deleteMeme()}
       />
      </div>
       )
    })
    return (
      <div className="App">
        <Title />
        <div className="meme-container">
          {this.displayFirstMeme()}
          <img className="generated-meme" src={this.state.meme.url}/>
        </div>
        <div className="generate-container">
          <button className="generate" onClick={() => this.generateMeme()}>Generate Meme</button>
        </div>
        <Save 
        />
        <Saved />
        <div className="display-saved-container">
          {displaySavedMemes}
        </div>
      </div>
    );
  }
}

export default App;
