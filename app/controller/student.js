'use strict';

const Controller = require('egg').Controller;

class studentCtr extends Controller {
  async index() {
    console.log(this.ctx.model);
    const students = await this.ctx.model.Tystudent.findAll();
    this.ctx.body = students;
  }
}

module.exports = studentCtr;
