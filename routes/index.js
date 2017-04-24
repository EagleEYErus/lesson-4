const router = require('express').Router();

router.get('/', (req, res) => res.render('index', { title: 'Статистика Overwatch' }));

module.exports = router;
