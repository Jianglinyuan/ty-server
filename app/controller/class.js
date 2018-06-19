'use strict';

const Controller = require('egg').Controller;

class ClassCtr extends Controller {
  async index() {
    const param = this.ctx.query;
    const { id, limit } = param;
    let classs;
    if (id) {
      classs = await this.ctx.model.Tyclass.findOne({
        where: {
          id,
        },
      });
    } else {
      const searchObject = limit ? { limit: +limit } : {};
      classs = await this.ctx.model.Tyclass.findAll(searchObject);
    }
    this.ctx.body = classs;
  }
}

module.exports = ClassCtr;
