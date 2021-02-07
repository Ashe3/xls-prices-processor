const { dbAdapter } = require('../db/config');
const shortid = require('shortid');

class BaseRepository {
  constructor(collectionName) {
    this.dbContext = dbAdapter.get(collectionName);
  }

  create(data) {
    data.id = shortid.generate();
    const list = this.dbContext.push(data).write();
    return list.find(it => it.id === data.id);
  }

  getAll() {
    return this.dbContext.value();
  }

  delete(id) {
    return this.dbContext.remove({ id }).write();
  }
}

exports.BaseRepository = BaseRepository;