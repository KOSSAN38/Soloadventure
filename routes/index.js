var express = require('express');
var router = express.Router();
const { query } = require('../models/db');

router.get('/', function (req, res, next) {
  res.render('users', { title: 'Userpage', users: ['Hans', 'Moa', 'Bengt', 'Frans', 'Lisa'] });
});

router.get('/:id', async function (req, res, next) {
  try {

    const story = await query(
      'SELECT * FROM story WHERE story_id = ?',
      req.params.id
    );

    res.render('index', {
      id: req.params.id,
      story: story
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;

