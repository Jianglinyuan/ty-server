
'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getUser(openId) {
    const result = await this.ctx.model.Tyusers.findOne({
      where: {
        uid: openId,
      },
    });
    return result;
  }
}

module.exports = UserService;
