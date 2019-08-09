const router = require('express').Router();

const A = require('../models/a');
const B = require('../models/b');
const C = require('../models/c');

router.get('/', async (req, res) => {
    const b = await B.find();
    res.send(b);
});

router.post('/', async (req, res) => {
    const b = new B(req.body);
    await b.save();
    res.send(b);
});

module.exports = router;