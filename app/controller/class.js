'use strict';

const Controller = require('egg').Controller;

class ClassCtr extends Controller {
  async index() {
    const param = this.ctx.query;
    const { id } = param;
    let classs;
    if (id) {
      classs = await this.ctx.model.Tyclass.findOne({
        where: {
          id,
        },
      });
    } else {
      classs = await this.ctx.model.Tyclass.findAll();
    }
    this.ctx.body = classs;
  }
}

module.exports = ClassCtr;
