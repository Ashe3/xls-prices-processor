const path = require('path');
const fs = require('fs');
const express = require('express');

const router = express.Router();

router.get('*', (request, response) => {
	const staticPath = path.resolve(`${__dirname}/../public/index.html`);
	response.write(fs.readFileSync(staticPath));
	response.end();
});

module.exports = router;