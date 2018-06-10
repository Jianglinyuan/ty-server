'use strict';

const Controller = require('egg').Controller;

class verifysCtr extends Controller {
  async index() {
    const verifyss = await this.ctx.model.Tyverifys.findAll();
    this.ctx.body = verifyss;
  }
}

module.exports = verifysCtr;
