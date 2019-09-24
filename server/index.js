const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
const Users = require("./routes/Users");
const db = require('./databases/db');

var cors = require('cors')
app.use(cors())

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	db.query("SELECT * FROM texts").then(rows => res.send(rows));
});
app.post('/', (req, res) => {

	function resultQuery(err, result) {
		if(err) throw new Error(err);
		console.log('UPDATED');
	}

	function addFields(type, columnLength, rowLength) {
		if(type === 'ADDROW') {
			for(let i = 0; i < columnLength; i++) {
				db.query(`INSERT into texts (id_row, id_column, text) VALUES (${rowLength}, ${i}, ' ')`).then(done => resultQuery(false, done));
			}
		}else if(type === 'ADDCOLUMN') {
			for(let i = 0; i < rowLength; i++) {
				db.query(`INSERT into texts (id_row, id_column, text) VALUES (${i}, ${columnLength}, ' ')`).then(done => resultQuery(false, done));
			}
		}
	}

	function removeFields(type, index) {
		if(type === 'REMOVEROW') {
			one = db.query(`DELETE FROM texts WHERE id_row = ${index - 1}`).then(done => resultQuery(false, done));
		}else if(type === 'REMOVECOLUMN') {
			one = db.query(`DELETE FROM texts WHERE id_column = ${index - 1}`).then(done => resultQuery(false, done));
		}

	}

	function updateCell(value, idRow, idCol) {
		db.query(`UPDATE texts SET text = '${value}' WHERE id_row = ${idRow} AND id_column = ${idCol}`);
	}

	switch(req.body.type) {
		case 'UPDATE':
		 	updateCell(req.body.value, req.body.idRow, req.body.idCol);
			break;
		case 'ADDROW':
			addFields(req.body.type ,req.body.columnLength, req.body.rowLength);
			break;
		case 'REMOVEROW':
			removeFields(req.body.type, req.body.index);
			break;
		case 'ADDCOLUMN':
			addFields(req.body.type ,req.body.columnLength, req.body.rowLength);
			break;
		case 'REMOVECOLUMN':
			removeFields(req.body.type, req.body.index);
			break;
		default :
			console.log('default');	
	}
});

app.use('/users', Users);


app.listen(port, () => console.log('server created'));