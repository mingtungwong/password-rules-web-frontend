const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config()
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const validationRouter = require('./routes/validation');

const port = process.env.PORT || 3000;

console.log(process.env["MONGODB_URI"]);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const options = {
  keepAlive: 1,
  connectTimeoutMS: 30000
};

let db;
let site;

mongoClient.connect(process.env["MONGODB_URI"], options, (error, database) => {
    if(error) throw error;
    else {
        site = database.db('password-rules').collection('site');
        app.listen(port, () => console.log(`I'm listening on port ${port}`));
    }
})

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/site', (req, res, next) => {
  site.find().toArray((error, results) => res.send(error ? error : results));
})

app.get('/search/:query', (req, res, next) => {
  site.find({site: new RegExp(req.params.query)}).toArray((error, results) => res.send(error ? error: results));
})

app.get('/site/:siteName', (req, res, next) => {
  site.find({site: req.params.siteName}).toArray((error, results) => res.send(error ? error : results));
})

app.post('/site', (req, res, next) => {
  site.save(req.body, (error, result) => res.send(error ? error : "Done"));
})

app.put('/site/:siteName', (req, res, next) => {

})

app.delete('/site/:siteName', (req, res, next) => {
  
})

app.use(validationRouter);

app.use(express.static('public'));
app.get('/', (req, res,next) => res.sendFile(path.resolve(__dirname + 'index.html')));