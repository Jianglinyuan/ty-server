
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

  async modifyYanzhi(openId, number, title) {
    const currentUser = await this.ctx.model.Tyusers.findOne({
      where: {
        uid: openId,
      },
    });

    if (!currentUser) {
      throw new Error('不存在这个用户');
    }

    const total = currentUser.yanzhi + number;
    await this.ctx.service.recodeyz.record(openId, title, number, total);

    await this.ctx.model.Tyusers.update(
      { yanzhi: total },
      {
        where: {
          uid: openId,
        },
      }
    );
  }

}

module.exports = RecordedYzService;
