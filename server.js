
// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const customers_api = require('./server/routes/customers_api');
const companys_api = require('./server/routes/companys_api');
const comments_api = require('./server/routes/comments_api');


const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
console.log(path.join(__dirname, 'dist/angusales'));
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/angusales')));
app.use(express.static(path.join(__dirname, 'node_modules')));


// Set our api routes
app.use('/customers_api', customers_api);
app.use('/companys_api', companys_api);
app.use('/comments_api', comments_api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angusales/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));