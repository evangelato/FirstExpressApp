const express = require('express');
router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'First Express App', message: 'Hello'});
});

module.exports = router;