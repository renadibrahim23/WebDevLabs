const express = require('express');
const { MongoClient } = require('mongodb');
const coursesRouter = require('./routes/courses');

const app = express();
app.use(express.json());

const url = 'mongodb://localhost:27017';
const dbName = 'courseManagement';

let db;


MongoClient.connect(url)
  .then(client => {
    db = client.db(dbName);
    console.log('Connected to Database');

    
    app.locals.db = db;

    app.listen(3000, () => {
      console.log('Server running on http://localhost:3000');
    });
  })
  .catch(err => console.error(err));


app.use('/courses', coursesRouter);
