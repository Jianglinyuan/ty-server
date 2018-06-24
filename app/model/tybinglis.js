/* jshint indent: 2 */

'use strict';

module.exports = function(app) {
  const { STRING, INTEGER, TEXT } = app.Sequelize;
  return app.model.define('tyBinglis', {
    id: {
      type: INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: STRING(1024),
      allowNull: true,
    },
    content: {
      type: TEXT('long'),
      allowNull: true,
      defaultValue: '',
    },
    ups: {
      type: STRING(1024),
      allowNull: true,
    },
    reviews: {
      type: TEXT('long'),
      allowNull: true,
    },
    price: {
      type: STRING(1024),
      allowNull: true,
    },
    time: {
      type: STRING(1024),
      allowNull: true,
    },
    pic: {
      type: STRING(1024),
      allowNull: true,
    },
    creator: {
      type: STRING(1024),
      allowNull: true,
    },
    author: {
      type: STRING(1024),
      allowNull: true,
    },
    openId: {
      type: STRING(1024),
      allowNull: true,
    },
  }, {
    tableName: 'ty-binglis',
  });
};
