var express = require('express');
var router = express.Router();
const { query } = require('../models/db');

router.get('/', function (req, res, next) {
    res.render('story', { title: 'Userpage', users: ['Hans', 'Moa', 'Bengt', 'Frans', 'Lisa'] });
});

router.get('/:id', async function (req, res, next) {
    try {
        const story = await query(
            'SELECT * FROM story WHERE id = ?',
            req.params.id
        );

        const links = await query(
            'SELECT * FROM links WHERE story_id = ?',
            req.params.id
        );

        res.json({
            id: req.params.id,
            story: story,
            links: links
        });
    } catch (e) {
        console.error(e);
        next(e);
    }
});

module.exports = router;

