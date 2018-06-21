
'use strict';

const Service = require('egg').Service;

class RecordedYzService extends Service {
  async record(user, title, current, total) {
    const newRecord = {
      user,
      title,
      current,
      total,
    };
    const result = await this.ctx.model.Tyrecode.create(newRecord);
    return result;
  }

}

module.exports = RecordedYzService;
