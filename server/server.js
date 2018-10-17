const express = require('express');
const bodyParser = require('body-parser');
const { addUser, getUsers } = require('../database/db.js');

const app = express();

app.use('/', express.static('public'));
app.use(bodyParser.json());

app.get('/users', (req, res) => {
  getUsers((err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
});

app.post('/users', (req, res) => {
  addUser(req.body.user, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send('Post Request received ', result);
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
