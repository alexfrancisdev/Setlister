const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { port, dbUri } = require('./config/environment');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(dbUri);

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());

app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port, () => console.log(`Express is listening on port ${port}`));

module.exports = app;
