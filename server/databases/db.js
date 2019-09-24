const mysql = require('mysql');

const configDB = {
  host: "localhost",
  user: "root",
  password: "12345",
  database: 'tables'
};

class DB {
	constructor( config ) {
		this.connection = mysql.createConnection(config);
		this.connection.connect( err => {
			if(err) throw new Error(err);
  			console.log("Connected to db!");
		});
	}
	query(sql, args) {
		return new Promise( (resolve, reject) => {
			this.connection.query(sql, args, (err, rows) => {
				if(err) return reject(err);
				resolve(rows)
			});
		});
	}
}

const db = new DB(configDB);

module.exports = db;