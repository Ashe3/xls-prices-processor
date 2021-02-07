const express = require('express');
const router = express.Router();
var multer  = require('multer')

var upload = multer({ dest: 'uploads/' })

router
  .post('/:id', upload.single('file'), (request, response) => {
    console.log(request.file);
  });

module.exports = router;