'use strict';

const Controller = require('egg').Controller;

class NewsCtr extends Controller {
  async index() {
    const { id } = this.ctx.query;
    if (!id) {
      const newss = await this.ctx.model.Tynews.findAll();
      this.ctx.body = newss;
    } else {
      const singleNews = await this.ctx.model.Tynews.findOne({
        where: {
          id,
        },
      });
      this.ctx.body = singleNews;
    }
  }

}

module.exports = NewsCtr;
