let config = require('../configs/config');

const mysql = require("promise-mysql");

exports.getNewBookById = async function (req, res) {
    let sql;
    let result;

    const db = await mysql.createConnection({
        host: config.dbhost,
        user: config.dbuser,
        password: config.dbpassword,
        database: config.db
    });

    sql = `SELECT * FROM newbooks WHERE id = ? `;
    await db.query(sql, req.params.id, function (err, result) {
        res.json(result);
    });
    db.end();
};

exports.getAllNewBooks = async function (req, res) {
    let sql;
    let result;

    const db = await mysql.createConnection({
        host: config.dbhost,
        user: config.dbuser,
        password: config.dbpassword,
        database: config.db
    });

    sql = `Select * from newbooks order by activationdate desc`;
    result = await db.query(sql);
	res.json(result);
    db.end();
};