const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
const Users = require("./routes/Users");
const db = require('./databases/db');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

var cors = require('cors');

app.use(cookieParser());

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

process.env.SECRET_KEY = 'secret';


app.use('/users', Users);

app.use('/', (req, res, next) => {
	
	let token = req.headers.token;

	jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
		if (err) {
			res.sendStatus(403);
		}else {
			req.user = data;
			next();
		}
		
	});	
});


app.get('/', (req, res) => {

	let user = req.user;

	db.query(`SELECT * FROM texts WHERE id_user = '${user.id}' `).then(rows => res.send({rows, user}));
});
app.post('/', (req, res) => {

	let idUser;

	jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, data) => {
		if (err) {
			res.sendStatus(403);
			return;
		}else {
			idUser = data.id;
		}
		
	});	

	// console.log(req.headers.token);
	function resultQuery(err, result) {
		if(err) throw new Error(err);
		console.log('UPDATED');
	}

	function addFields(type, columnLength, rowLength) {
		if(type === 'ADDROW') {
			for(let i = 0; i < columnLength; i++) {
				db.query(`INSERT into texts (id_row, id_column, text, id_user) VALUES (${rowLength}, ${i}, ' ', ${idUser})`).then(done => resultQuery(false, done));
			}
		}else if(type === 'ADDCOLUMN') {
			for(let i = 0; i < rowLength; i++) {
				db.query(`INSERT into texts (id_row, id_column, text, id_user) VALUES (${i}, ${columnLength}, ' ', ${idUser})`).then(done => resultQuery(false, done));
			}
		}
	}

	function removeFields(type, index) {
		if(type === 'REMOVEROW') {
			one = db.query(`DELETE FROM texts WHERE id_row = ${index - 1} AND id_user = ${idUser}`).then(done => resultQuery(false, done));
		}else if(type === 'REMOVECOLUMN') {
			one = db.query(`DELETE FROM texts WHERE id_column = ${index - 1} AND id_user = ${idUser}`).then(done => resultQuery(false, done));
		}

	}

	function updateCell(value, idRow, idCol) {
		db.query(`UPDATE texts SET text = '${value}' WHERE id_row = ${idRow} AND id_column = ${idCol} AND id_user = ${idUser}`).then(done => resultQuery(false, done));
	}

	switch(req.body.type) {
		case 'UPDATE':
		 	updateCell(req.body.value, req.body.idRow, req.body.idCol);
			break;
		case 'ADD':
			addFields(`${req.body.type}${req.body.whatType}`,req.body.columnLength, req.body.rowLength);
			break;
		case 'REMOVE':
			removeFields(`${req.body.type}${req.body.whatType}`, req.body.index);
			break;
		default :
			console.log('default');	
	}
});

app.listen(port, () => console.log('server created'));