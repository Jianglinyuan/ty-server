'use strict';

const Controller = require('egg').Controller;

class NewsCtr extends Controller {
  async index() {
    const newss = await this.ctx.model.Tynews.findAll();
    this.ctx.body = newss;
  }
}

module.exports = NewsCtr;
