let express = require('express')
let app = express();
let bodyParser = require('body-parser')
let mysql = require('mysql')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended :true}))
