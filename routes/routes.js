router.get('/', function (req, res, next) {
    const sql = 'SELECT * FROM meeps';

    pool.query(sql, function (err, result, fields) {
        if (err) throw err;

        res.render('test', { result: result });
    });
});