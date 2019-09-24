const express = require("express");
const users = express.Router();
const db = require('../databases/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

users.post('/register', (req, res) => {
	console.log(req.body);
	const userObj = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	}

	bcrypt.hash(req.body.password, 10, (err, hash) => {
		findOneUser(userObj.email).then(
			result => {
				if(result) res.send('User is already exist');
				else {
					db.query(`INSERT INTO users(name, email, password) VALUES ('${userObj.name}', '${userObj.email}', '${hash}' )`).then(
						result => {res.send('registered')}
					)
				}
			}
		);
	});

	async function findOneUser(email) {
		let answer = await db.query(`SELECT * FROM users WHERE email = '${email}'`).then(data => data.length != 0 ? true : false);
		return answer;
	}


});

users.post('/login', (req, res) => {
	const userObj = {
		email: req.body.email,
		password : req.body.password
	}

	db.query(`SELECT * FROM users WHERE email = '${userObj.email}'`).then(
		rows => {
			console.log(rows.password);
			console.log(userObj.password);

			// if(result.password == userObj.password) {
			// 	console.log('PASS CORECT')
			// }else {
			// 	console.log('PASS UNCORECT')
			// }
		},
		err => console.log(err)
	);

});


module.exports = users;