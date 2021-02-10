const express = require('express');
const router = express.Router();

const { RulesService } = require('../services/RulesServices');
const responseMiddleware = require('../middlewares/responseMiddleware');

router
  .post('/', (request, response, next) => {
    const { body: newRule } = request;
    const rule = RulesService.createRule(newRule);

    if (rule) {
      response.body = rule;
    } else {
      response.err = { message: 'Failed to create new rule' };
    }
    next();

  }, responseMiddleware)

  .get('/', (request, response, next) => {

    const rules = RulesService.getAllRules();

    if (rules) {
      response.body = rules;
    } else {
      response.err = { message: 'Failed to get rules list' };
    }
    next();
  }, responseMiddleware)

  .delete('/:id', (request, response, next) => {
    const { id } = request.params;
    const deleted = RulesService.delete(id);

    if (deleted) {
      response.body = `Rule id=${id} successfully deleted`;
    } else {
      response.err = { message: `Failed to delete rule id=${id}` };
    }
    next();
  }, responseMiddleware);

module.exports = router;