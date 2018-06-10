'use strict';

const Controller = require('egg').Controller;

class ClassCtr extends Controller {
  async index() {
    const classs = await this.ctx.model.Tyclass.findAll();
    this.ctx.body = classs;
  }
}

module.exports = ClassCtr;
