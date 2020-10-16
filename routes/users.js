const express = require('express');
const router = express.Router();
const { pool, query } = require('../models/db');

router.get('/', function (req, res, next) {
  const sql = 'SELECT * FROM meeps';

  pool.query(sql, function (err, result, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      result
    });
  });
});


router.get('id/', function (req, res, next) {
  try {
    const user = query(
      'SELECT *FROM users WHERE id = ?',
      req.params.id
    );

    const meeps = query(
      'SELECT *FROM meeps WHERE id = ?',
      req.params.id
    )

    res.json({
      status: 200,
      users: user,
      meeps: meeps
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
});




module.exports = router;
