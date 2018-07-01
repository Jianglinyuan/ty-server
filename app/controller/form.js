'use strict';

const Controller = require('egg').Controller;

class FormCtr extends Controller {
  async submit() {
    await this.ctx.model.Tyindexform.create(this.ctx.request.body);
    this.ctx.body = {
      code: 0,
      msg: 'buy success',
    };
  }
}

module.exports = FormCtr;
