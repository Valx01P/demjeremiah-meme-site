const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

//parse request to body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//setting template engine
app.set('view engine', 'ejs');

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

app.get('/', (req, res) => {
    res.send('Hello World!');
});  

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});