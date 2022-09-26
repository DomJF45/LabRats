const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 4001;
const { errorHandler } = require('./middleware/errorMiddleware')
const colors = require('colors');
const dbConnect = require('./config/db');

dbConnect();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/labs', require('./routes/labRoute'));
app.use('/api/labs/:labId/projects', require('./routes/projectRoute'));

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`.blue.underline);
})