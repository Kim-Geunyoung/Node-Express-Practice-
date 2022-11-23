const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('contacts이후 url');
});

router.get('/list', (req, res) => {
    res.send('contacts list이후 url');
});

module.exports = router;