const express = require('express');
const app = express();
const env = require('./config/environment');
const mongoose = require('mongoose');
mongoose.connect(env.dbUri);
const router = require('./config/router');



app.use('/api', router);

app.listen(env.port, () => console.log(`Up and running on ${env.port}`));
