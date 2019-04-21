const express = require('express');
const KrakenClient = require('./kraken');
const app = express();
var message;

const keyKraken = 'vdMmjTaAIPjSZ4+4wDnfJ4Ifs8WMcUPBbQS/b3fhi+NJPR/5a6Yr2k7R';
const secret = '/z0Lzbu0Y9xWTgzY93Mgf++gzOH9eMNm16/eQ7kmcICHfWYkepCrCq6eI8KM7QpJumJ/DNlliQz71grbcbqXRA==';

const kraken = new KrakenClient(keyKraken, secret);

async function krakenApiCall(){
    await kraken.api('Balance')
    .then(res => {
      message = res.result.ZEUR;
    }).catch(err => console.log(err));
}

const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'));
    });
}

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
app.get('/', function (req, res) {
    krakenApiCall().then(()=>
    res.send(message)
    )
});
