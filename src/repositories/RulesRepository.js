const { BaseRepository } = require('./BaseRepository');

class RulesRepository extends BaseRepository {
  constructor() {
    super('rules');
  }
}

exports.RulesRepository = new RulesRepository();