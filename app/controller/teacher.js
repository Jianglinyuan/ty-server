'use strict';

const Controller = require('egg').Controller;

class teacherCtr extends Controller {
  async index() {
    console.log(this.ctx.model);
    const verifyss = await this.ctx.model.Tyteacher.findAll();
    this.ctx.body = verifyss;
  }
}

module.exports = teacherCtr;
