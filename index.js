const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

// connect to DB
const options = {
    useNewUrlParser: true,
    useFindAndModify: false
};

mongoose.connect('mongodb://localhost:27017/testNode', options)
    .then(() => console.log("Connected to db..."))
    .catch((err) => console.log("Could not connect to db:", err));

// end of DB logic

app.use(morgan('tiny'));

app.use(express.json());

app.use('/a', require('./routes/a'));
app.use('/b', require('./routes/b'));
app.use('/c', require('./routes/c'));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));