'use strict';

const Controller = require('egg').Controller;

class studentCtr extends Controller {
  async index() {
    let students;
    const { id } = this.ctx.query;
    if (id) {
      students = await this.ctx.model.Tystudent.findOne({
        where: {
          id,
        },
      });
    } else {
      students = await this.ctx.model.Tystudent.findAll();
    }
    this.ctx.body = students;
  }
}

module.exports = studentCtr;
