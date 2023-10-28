const express = require('express');
const studentRouter = require('./routes/students');
const classesRouter = require('./routes/classes');
const teachersRouter = require('./routes/teachers');
const massive = require ('massive')
require('dotenv').config()

const { CONNECTION_STRING } = process.env;

const app = express();

app.use(express.json());

app.use('/api/students', studentRouter);
app.use('/api/classes', classesRouter);
app.use('/api/teachers', teachersRouter);

massive(CONNECTION_STRING).then(connection => {
  app.set('db', connection)
  app.listen(4000, () => {
    console.log('Listening on port 4000');
  });
})