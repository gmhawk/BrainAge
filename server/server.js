const express = require('express');
const axios = require('axios');
// const bodyParser = require('body-parser');

const app = express();

app.use('/', express.static('public'));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
