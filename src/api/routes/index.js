const router = require('express').Router();

const rulesRouter = require('./rules');
const staticRouter = require('./static');

router.use('/static', staticRouter);
router.use('/rules', rulesRouter);


module.exports = router;