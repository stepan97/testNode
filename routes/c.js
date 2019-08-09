const router = require('express').Router();

const A = require('../models/a');
const B = require('../models/b');
const C = require('../models/c');

router.get('/', async (req, res) => {
    const c = await C.find();
    res.send(c);
});

router.post('/', async (req, res) => {
    const c = new C(req.body);
    await c.save();
    res.send(c);
});

module.exports = router;