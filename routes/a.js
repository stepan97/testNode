const router = require('express').Router();

const A = require('../models/a');
const B = require('../models/b');
const C = require('../models/c');

router.get('/', async (req, res) => {
    const a = await A.find();
    res.send(a);
});

router.get('/withB', async (req, res) => {
    const a = await A
        .find()
        .populate('b')
        .sort('b.c');

    res.send(a);
});

router.post('/', async (req, res) => {
    const a = new A(req.body);
    await a.save();
    res.send(a);
});

module.exports = router;