const express = require('express');
const router = express.Router();
const { pool, query } = require('../models/db');


router.get('/', function (req, res, next) {
    const sql = 'SELECT * FROM users';

    pool.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            result
        });
    });
});
module.exports = router;