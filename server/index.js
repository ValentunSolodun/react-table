const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3001;
const bodyParser = require("body-parser");

var cors = require('cors')
app.use(cors())

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: 'tables'
});

db.connect(function(err) {
  console.log("Connected!");
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
	db.query("SELECT * FROM texts", function(err, rows) {
		res.send(rows);
	});
});
app.post('/', (req, res) => {
	console.log(req.body);
});

app.listen(port, () => console.log('server created'));