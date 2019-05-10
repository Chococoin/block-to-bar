const express = require('express');
const KrakenClient = require('./kraken');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const keyKraken = '3kc10LiQKqrKKozEXwV9cvxphG+23HdiTqBYqFXCOJrXMrLVoprgLVfD';
const secret = 'tvZfsYoC4lDaPfAHJ61SFFV0Ej6wP8LwXwnCTqDrUiBHrkoTUIzNMyczNlwSTsdjTXWkKIELBR5Gwm4c9+0UsA==';

const kraken = new KrakenClient(keyKraken, secret);

var data;

async function krakenApiCall(){
    await kraken.api('Balance')
    .then(res => {
      data = res.result.ZEUR;
    }).catch(err => console.log( err));
}


const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'));
    });
}

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

app.get('/data', function (req, res) {
    krakenApiCall().then( () => {
    res.send(data);
    }).catch(err => console.log(err))
});
