'use strict';

const Controller = require('egg').Controller;

class BookCtr extends Controller {
  async index() {
    const id = this.ctx.query.id;
    if (!id) {
      const books = await this.ctx.model.Tybooks.findAll();
      this.ctx.body = books;
    } else {
      const book = await this.ctx.model.Tybooks.findOne({
        where: {
          id,
        },
      });
      this.ctx.body = book;
    }
  }

  async buy() {
    const { user, name, phone, address, total, title, pic } = this.ctx.request.body;
    await this.ctx.service.recodeyz.modifyYanzhi(user, -total, `研值兑换:${title}`);
    const buyObject = { user, name, phone, address, total, title, pic };
    await this.ctx.model.Tyshoprecord.create(buyObject);
    this.ctx.body = {
      code: 0,
      msg: 'buy success',
    };
  }

  async getBuyRecored() {
    const openId = this.ctx.query.openId;

    const result = await this.ctx.model.Tyshoprecord.findAll({
      where: {
        user: openId,
      },
    });

    this.ctx.body = {
      code: 0,
      data: result,
    };
  }
}

module.exports = BookCtr;
