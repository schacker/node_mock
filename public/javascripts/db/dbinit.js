//var sys = require('sys');

var db = require('mysql');
/*
 * 数据库工具
 */
var dbtools = {
	dbObj: {
		user: 'root',
		password: 'root'
	},
	createClient: function(dbObj) {
		if (!dbObj) {
			return;
		}
		this.client = db.createConnection({
	  		user: dbObj.user || '',
	  		password: dbObj.password || ''
		});

		this.client.connect();
	},
	connectDB: function() {
		this.client.connect(function(error, results) {
			if (error) {
				console.log("Connection Error: " + error.message);
				return;
			}
			console.log("Connected to MySql");
		});
	},
	//连接数据库
	initDB: function() {
		this.client.connect(function(error, results) {
			if (error) {
				console.log('Connection Error: ' + error.message);
				return;
			}
			console.log('Connected to MySQL');
		});
	},
	//打开数据库
	openDB: function(client) {
		this.client.query('USE NodeSample', function(error, results) {
			if (error) {
				console.log('ClientConnectionReady Error: ' + error.message);
				client.end();
				return;
			}
			console.log("ready");
			//ClientReady(client)
		});
	},
	ClientReady: function(client) {
		var values = ['Chad', 'Lung', 'Hello World'];
		var that = this;
		this.client.query('INSERT INTO MyTable SET firstname = ?, lastname = ? , message = ?', values,
			function(error, results) {
				if (error) {
					console.log("ClientReady Error: " + error.message);
					that.client.end();
					return;
				}
				console.log('Inserted: ' + results.affectedRows + ' row.');
				console.log('Id inserted: ' + results.insertId);
			}
		);
		GetData(that.client);
	},
	GetData: function(client) {
		client.query('SELECT * FROM MyTable', function selectCb(error, results, fields) {
			if (error) {
				console.log('GetData Error: ' + error.message);
				client.end();
				return;
			}
			if (results.length > 0) {
				var firstResult = results[0];
				console.log('First Name: ' + firstResult['firstname']);
				console.log('Last Name: ' + firstResult['lastname']);
				console.log('Message: ' + firstResult['message']);
			}
		});

		client.end();
		console.log('Connection closed');
	}
};
exports.db = dbtools;