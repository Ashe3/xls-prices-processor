const express = require('express');
require('dotenv').config();

const router = require('./routes/mainRouter');

const app = express();
const PORT = process.env.PORT || process.env.PORT_DEFAULT;

app.use(express.static(`${__dirname}/public`));
app.use('/', router);


module.exports = startApp = () => {
	app.listen(PORT, () => {
		console.log(`
      ###########################
      Server started PORT:${PORT}
      ###########################`);
	});
}