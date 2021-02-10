const express = require('express');
const router = express.Router();
var multer = require('multer')

const { StaticServices } = require('../services/StaticServices');
const responseMiddleware = require('../middlewares/responseMiddleware');

var upload = multer({ dest: 'uploads/' })

router
  .post('/:id', upload.single('file'), (request, response, next) => {
    console.log(request.file);
    const { id } = request.params;
    if (!StaticServices.checkFileMime(request.file.mimetype)) {
      response.err = { message: 'File type is not supported' };
      next();
    } else if (!StaticServices.findRule({ id })) {
      response.err = { message: 'File rule not found' };
      next();
    }
    next()
  }, responseMiddleware);

module.exports = router;