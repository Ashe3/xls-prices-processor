const express = require('express');
const router = express.Router();

const { RulesService } = require('../services/RulesServices');

router
  .post('/', (request, response) => {
    const { body: newRule } = request;
    const c = RulesService.createRule(newRule);
    response.status(200).json({ status: 'ok', rule: c });
  })
  .get('/', (request, response) => {
    response.status(200).json(RulesService.getAllRules());
  })
  .delete('/:id', (request, response) => {
    const { id } = request.params;
    const r = RulesService.delete(id);
    // console.log(r.id);
    response.status(200).json({status: 'ok', removed: true})
  });

module.exports = router;