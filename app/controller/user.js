"use strict";

const Controller = require("egg").Controller;
const axios = require("axios");

class UserCtr extends Controller {
  async login() {
    const userCode = this.ctx.query.code;
    const openid = this.ctx.query.openID;

    if (openid) {
      const { openID, ...insertValue } = this.ctx.query;
      await this.ctx.model.Tyusers.update(insertValue, {
        where: {
          uid: openID
        }
      });
      const result = await this.ctx.model.Tyusers.findOne({
        where: {
          uid: openID
        }
      });
      console.log(result);
      this.ctx.body = result;
      return;
    }
    const { data } = await axios.get(
      "https://api.weixin.qq.com/sns/jscode2session",
      {
        params: {
          js_code: userCode,
          appid: "wxb7cf2ed8b24a06aa",
          secret: "96900e3c7382eb275fd4a1d5a4d89a7b",
          grant_type: "authorization_code"
        }
      }
    );

    if (!data.errcode) {
      await this.ctx.model.Tyusers.findOrCreate({
        where: {
          uid: data.openid
        },
        defaults: {
          uid: data.openid
        }
      });
    }

    this.ctx.body = data;
  }

  async getUser() {
    const { openID } = this.ctx.query;
    const result = await this.ctx.model.Tyusers.findOne({
      where: {
        uid: openID
      }
    });
    this.ctx.body = result;
  }

  async goodsIsFavorite() {
    const { openId, classId } = this.ctx.query;
    const result = await this.ctx.model.Tyusers.findOne({
      where: {
        uid: openId
      }
    });
    const goods = JSON.parse(result.shoucang);
    this.ctx.body = {
      code: 0,
      isFavorite: goods.class.find(value => value == classId) !== undefined
    };
  }

  async goodsFavorite() {
    const { openId, classId } = this.ctx.query;
    const user = await this.ctx.model.Tyusers.findOne({
      where: {
        uid: openId
      }
    });

    const shoucang = JSON.parse(user.shoucang);

    if (shoucang.class.find(value => value == classId) !== undefined) {
      this.ctx.body = {
        code: -1024,
        status: "已收藏"
      };
      return;
    }
    shoucang.class.push(classId);

    await this.ctx.model.Tyusers.update(
      { shoucang: JSON.stringify(shoucang) },
      {
        where: {
          uid: openId
        }
      }
    );

    this.ctx.body = {
      code: 0,
      status: "success"
    };
  }

  async goodsFavoriteDelete() {
    const { openId, classId } = this.ctx.query;
    const user = await this.ctx.model.Tyusers.findOne({
      where: {
        uid: openId
      }
    });

    const shoucang = JSON.parse(user.shoucang);
    const clas = shoucang.class.filter(item => item != classId);
    shoucang.class = clas;
    user.shoucang = shoucang;

    await this.ctx.model.Tyusers.update(
      { shoucang: JSON.stringify(shoucang) },
      {
        where: {
          uid: openId
        }
      }
    );

    this.ctx.body = {
      code: 0,
      status: "success"
    };
  }

  async modifyYanzhi() {
    const { openId, number, title } = this.ctx.request.body;
    await this.ctx.service.recodeyz.modifyYanzhi(openId, number, title);
    this.ctx.body = {
      code: 0,
      data: "success"
    };
  }
}

module.exports = UserCtr;
