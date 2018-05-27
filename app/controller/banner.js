'use strict';

const Controller = require('egg').Controller;

class BannerCtr extends Controller {
  async index() {
    const banners = await this.ctx.model.Tybanner.findAll();
    this.ctx.body = banners;
  }
}

module.exports = BannerCtr;
