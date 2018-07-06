import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Save from './Components/Save';
import Delete from './Components/Delete';
import Title from './Components/Title';
import Meme from './Components/Meme'



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

  componentDidMount(){
    axios.get(baseUrl).then((result) => {
      this.setState({
        memesToDisplay: result.data.data.memes
      })
    })
  }

generateMeme(){
  this.setState({
    meme: this.state.memesToDisplay[this.state.currentMeme],
    currentMeme: this.state.currentMeme + 1
  })
}


saveMeme(){

  axios.put('/api/savedMemes', {savedMeme: this.state.meme}).then(results => {
      console.log(results);
      this.setState({
          savedMemes: results.data
      })
      
  })
}

  render() {
    let displaySavedMemes = this.state.savedMemes.map((e,i) => {
    return(
      <div> 
       <img key={i} src={e.url}/> 
       <Delete />
      </div>
       )
    })
    return (
      <div className="App">
        <Title />
        <img src={this.state.meme.url}/>
        <button onClick={() => this.generateMeme()}>Generate Meme</button>
        <Save 
        onClick={() => this.saveMeme()}
        />
        <h2>Saved Memes:</h2>
          {displaySavedMemes}
      </div>
    );
  }
}

export default App;
