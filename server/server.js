const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());
// END-POINTS




//END-POINTS
const PORT = 3033;
app.listen(PORT, () => {
    console.log("Running on port: " + PORT);
});