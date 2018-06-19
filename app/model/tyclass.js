/* jshint indent: 2 */

'use strict';

module.exports = app => {

  const { STRING, INTEGER, TEXT } = app.Sequelize;
  return app.model.define('tyClass', {
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
      type: TEXT,
      allowNull: true,
    },
    ups: {
      type: STRING(1024),
      allowNull: true,
    },
    reviews: {
      type: STRING(1024),
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
    des: {
      type: STRING(1024),
      allowNull: true,
    },
  }, {
    tableName: 'ty-class',
    timestamps: false,
  });
};
