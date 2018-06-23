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
      const olCreator = +singleNews.creator;
      const creator = String(olCreator + 1);
      await this.ctx.model.Tyanlis.update({ creator }, {
        where: {
          id,
        },
      });
      this.ctx.body = singleNews;
    }
  }

  async reviewAnli() {
    const data = this.ctx.request.body;
    const singleNews = await this.ctx.model.Tyanlis.findOne({
      where: {
        id: data.id,
      },
    });
    singleNews.reviews = JSON.parse(singleNews.reviews);
    singleNews.reviews.push(data.review);
    await this.ctx.model.Tyanlis.update({ reviews: JSON.stringify(singleNews.reviews) }, { where: {
      id: data.id,
    } });

    this.ctx.body = {
      code: 0,
      data: 'success',
    };
  }

  async likeAnli() {
    const { id, openId } = this.ctx.query;

    const user = await this.ctx.model.Tyusers.findOne({
      where: {
        uid: openId,
      },
    });

    const shoucang = JSON.parse(user.shoucang);

    if (shoucang.anli.find(value => value == id) !== undefined) {
      this.ctx.body = {
        code: -1024,
        status: '已收藏',
      };
      return;
    }
    shoucang.anli.push(id);

    await this.ctx.model.Tyusers.update({ shoucang: JSON.stringify(shoucang) }, {
      where: {
        uid: openId,
      },
    });


    const singleNews = await this.ctx.model.Tyanlis.findOne({
      where: {
        id,
      },
    });

    singleNews.ups = +singleNews.ups + 1;

    this.ctx.model.Tyanlis.update({ ups: String(singleNews.ups) }, {
      where: {
        id,
      },
    });

    this.ctx.body = {
      code: 0,
      data: 'success',
    };
  }

  async modifyAnli() {
    const { content, openId, id, title, author } = this.ctx.request.body;
    if (!openId) {
      this.ctx.body = {
        code: -1024,
        data: 'no openId',
      };
      return;
    }

    if (id === 'undefined' || !id) {
      const result = await this.ctx.model.Tyanlis.create({
        title,
        content,
        openId,
        reviews: '[]',
        ups: 0,
        author,
      });
      this.ctx.body = {
        code: 0,
        data: result,
      };
      return;
    }

    this.ctx.model.Tyanlis.update({
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

module.exports = AnliCtr;
