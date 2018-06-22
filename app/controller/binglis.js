'use strict';

const Controller = require('egg').Controller;

class BingliCtr extends Controller {
  async index() {
    const { id, limit } = this.ctx.query;
    if (!id) {
      const searchObject = limit ? { limit: +limit } : {};
      const newss = await this.ctx.model.Tybinglis.findAll(searchObject);
      this.ctx.body = newss;
    } else {
      const singleNews = await this.ctx.model.Tybinglis.findOne({
        where: {
          id,
        },
      });
      const olCreator = +singleNews.creator;
      const creator = String(olCreator + 1);
      await this.ctx.model.Tybinglis.update({ creator }, {
        where: {
          id,
        },
      });
      this.ctx.body = singleNews;
    }
  }

  async reviewBingli() {
    const data = this.ctx.request.body;
    const singleNews = await this.ctx.model.Tybinglis.findOne({
      where: {
        id: data.id,
      },
    });
    singleNews.reviews = JSON.parse(singleNews.reviews);
    singleNews.reviews.push(data.review);
    await this.ctx.model.Tybinglis.update({ reviews: JSON.stringify(singleNews.reviews) }, { where: {
      id: data.id,
    } });

    this.ctx.body = {
      code: 0,
      data: 'success',
    };
  }

  async likeBingli() {
    const { id, openId } = this.ctx.query;

    const user = await this.ctx.model.Tyusers.findOne({
      where: {
        uid: openId,
      },
    });

    const shoucang = JSON.parse(user.shoucang);

    if (shoucang.bingli.find(value => value == id) !== undefined) {
      this.ctx.body = {
        code: -1024,
        status: '已收藏',
      };
      return;
    }
    shoucang.bingli.push(id);

    await this.ctx.model.Tyusers.update({ shoucang: JSON.stringify(shoucang) }, {
      where: {
        uid: openId,
      },
    });


    const singleNews = await this.ctx.model.Tybinglis.findOne({
      where: {
        id,
      },
    });

    singleNews.ups = +singleNews.ups + 1;

    this.ctx.model.Tybinglis.update({ ups: String(singleNews.ups) }, {
      where: {
        id,
      },
    });

    this.ctx.body = {
      code: 0,
      data: 'success',
    };
  }

  async modifyBingli() {
    const { content, openId, id, title } = this.ctx.request.body;
    if (!openId) {
      this.ctx.body = {
        code: -1024,
        data: 'no openId',
      };
      return;
    }

    if (!id) {
      this.ctx.model.create({
        title,
        content,
      });
      this.ctx.body = {
        code: 0,
        data: 'success',
      };
      return;
    }

    this.ctx.model.Tybinglis.update({
      content,
      title,
    }, {
      where: {
        id,
      },
    });

    this.ctx.body = {
      code: 0,
      data: 'success',
    };
  }

}

module.exports = BingliCtr;
