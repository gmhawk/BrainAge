const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'brain',
  password: 'alanfu1337',
  port: 5432,
});

client.connect((err, results) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Database connected');
  }
});

const addUser = (id, user, callback) => {
  client.query(`INSERT INTO users(id, user) VALUES(${id}, ${user})`, callback);
};

module.exports = { addUser };
