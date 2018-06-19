'use strict';

const Controller = require('egg').Controller;

class AnliCtr extends Controller {
  async index() {
    const { id, limit } = this.ctx.query;
    if (!id) {
      const searchObject = limit ? { limit: +limit } : {};
      const newss = await this.ctx.model.Tyanlis.findAll(searchObject);
      this.ctx.body = newss;
    } else {
      const singleNews = await this.ctx.model.Tyanlis.findOne({
        where: {
          id,
        },
      });
      this.ctx.body = singleNews;
    }
  }

}

module.exports = AnliCtr;
