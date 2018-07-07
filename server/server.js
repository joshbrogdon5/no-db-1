require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let saved = [];


app.use(bodyParser.json());

// END-POINTS

app.put('/api/savedMemes', (req,res) => {
    saved.push(req.body.savedMeme);
    res.status(200).send(saved);
    console.log(saved)
})

app.delete('/api/savedMemes/:id', (req,res) => {
    saved.splice(req.params.id, 1);//could I somehow use current meme to delete??
    res.status(200).send(saved);
    console.log(saved)
})


//END-POINTS
const PORT = 3033;
app.listen(PORT, () => {
    console.log("Running on port: " + PORT);
});