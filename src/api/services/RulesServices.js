const { RulesRepository } = require('../../repositories/RulesRepository');

class RulesService {
  createRule(data) {
    return RulesRepository.create(data);
  }

  getAllRules() {
    return RulesRepository.getAll();
  }

  delete(id) {
    return RulesRepository.delete(id);
  }
}

exports.RulesService = new RulesService();;