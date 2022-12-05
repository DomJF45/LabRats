const path = require('path');
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

app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/labs', require('./routes/labRoute'));
app.use('/api/labs/:labId/projects', require('./routes/projectRoute'));
app.use('/api/labs/:labId/projects/:projectId/tasks', require('./routes/taskRoute'));
// serve the client
if (process.env.NODE_ENV === production) {
  // set static (build) folder
  app.use(express.static(path.join(__dirname, '../client/build')))
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html')))
} else {
  app.get('/', (req, res) => res.send('Please set to production'))
}

app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`.blue.underline);
})