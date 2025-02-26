const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');//jkhn domain pabo tkhn list korbo kon server theke accept korbo
const app = express();
app.use(cors());

app.get('/', (req, res) => {
   res.send("Hello, world!");
});

module.exports = app;