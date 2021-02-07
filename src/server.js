const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const router = require('./routes/mainRouter');
const routes = require('./api/routes/index');

const app = express();
const PORT = process.env.PORT || process.env.PORT_DEFAULT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

app.use('/api', routes);
app.use('/', router);


module.exports = startApp = () => {
	app.listen(PORT, () => {
		console.log(`
      ###########################
      Server started PORT:${PORT}
      ###########################`);
	});
}