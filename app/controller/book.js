'use strict';

const Controller = require('egg').Controller;

class BookCtr extends Controller {
  async index() {
    const books = await this.ctx.model.Tybooks.findAll();
    this.ctx.body = books;
  }
}

module.exports = BookCtr;
