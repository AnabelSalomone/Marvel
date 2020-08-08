let express = require('express')
let app = express()
let axios = require('axios')
let crypto = require('crypto');
let cors = require('cors');
let bodyParser = require('body-parser');
let logger = require('morgan');
let helmet = require('helmet');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cors());
logger('tiny')
app.use(helmet());


let API_KEY = '';
let PRIV_KEY = '';

let ts = new Date().getTime();
let hash = crypto.createHash('md5').update(ts + PRIV_KEY + API_KEY).digest('hex');
let comicsurl = 'http://gateway.marvel.com/v1/public/characters?offset=100&ts=' + ts + '&apikey=' + API_KEY + '&hash=' + hash;

app.get('/', (req, res) => {

  axios.get(comicsurl).then((response) => {
    res.setHeader('Content-Type', 'application/json');
    return res.json(response.data);
  }).catch(function (err) {
    if (response.status === 409) {
      console.log(response.data);
    }
  })
})

app.get('/profile/:id', (req, res) => {

  //récupérer l'id en paramètre
  let id = req.params.id;
  console.log(req.params.id);
  axios.get(`http://gateway.marvel.com/v1/public/characters/${req.params.id}?ts=` + ts + '&apikey=' + API_KEY + '&hash=' + hash).then((response) => {
    res.setHeader('Content-Type', 'application/json');
    return res.json(response.data)
  })

});


app.listen(3000, function () {
  console.log('Listened on port 3000!')
})
