const port = process.env.PORT || 3000
const client = process.env.CLIENT_PATH || '../my-angular-project/dist/my-angular-project/browser';

const express = require('express');
const cors = require('cors');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes')

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/healthcheck', (req, res) => {
	res.status(200).send({ message: 'healthcheck' })
})

// install our custom routes
app.use ('/api', routes);

// Serve the front end static files
app.use(express.static(client));
app.get(/(.*)/, (req, res, next) => {
   console.log ("Redirect /index.html")
   res.redirect('/');
})

// The 404 Route (ALWAYS keep this as the last route)
app.use((req, res, next) => {
  res.status(404).send("Page Not Found!");
});

app.listen(port, () => {
	console.log(`Resource Server Ready on port ${port}`)
})

module.exports = { app };