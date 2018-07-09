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



const baseUrl = 'https://api.imgflip.com/get_memes';

class App extends Component {
  constructor(){
    super()

    this.state = {
      memesToDisplay: [],
      savedMemes: [],
      meme: {name: "", url: ""},
      currentMeme: 0
    }
    this.generateMeme=this.generateMeme.bind(this);
  }

  // componentDidMount(){
  //   axios.get(baseUrl).then((result) => {
  //     this.setState({
  //       memesToDisplay: result.data.data.memes
  //     })
  //   })
  // }

generateMeme(){
  this.setState({
    meme: this.state.memesToDisplay[this.state.currentMeme],
    currentMeme: this.state.currentMeme + 1
  })
}

displayTitle(){
  return this.state.savedMemes.data //this is optional but ask about it to be able to display actual title of meme
}

saveMeme(){

  axios.put('/api/savedMemes', {savedMeme: this.state.meme}).then(results => {
      console.log(results);
      this.setState({
          savedMemes: results.data
      })
      
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
    let displaySavedMemes = this.state.savedMemes.map((e,i) => {
    return(
      <div>  
       <Meme 
       title={() => this.displayTitle()}//this is optional but ask about it to be able to display actual title of meme
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
          <img className="generated-meme" src={this.state.meme.url}/>
        </div>
        <div className="generate-container">
          <button className="generate" onClick={() => this.generateMeme()}>Generate Meme</button>
        </div>
        <Save 
        onClick={() => this.saveMeme()}
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
