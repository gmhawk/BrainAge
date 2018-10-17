const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.use('/', express.static('public'));
app.use(bodyParser.json());

app.post('/users', (req, res) => {
  console.log(req.body.user);
  fs.appendFile('./database/db.csv', `${req.body.user}\n`, (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
  res.send('got it man!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
