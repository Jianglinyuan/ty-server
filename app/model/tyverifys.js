/* jshint indent: 2 */

'use strict';

module.exports = function(app) {
  const { STRING, INTEGER } = app.Sequelize;
  return app.model.define('tyVerifys', {
    id: {
      type: INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    title: {
      type: STRING(255),
      allowNull: true,
      field: 'title',
    },
    content: {
      type: STRING(1024),
      allowNull: true,
      defaultValue: '',
      field: 'content',
    },
    ups: {
      type: STRING(255),
      allowNull: true,
      field: 'ups',
    },
    reviews: {
      type: STRING(11),
      allowNull: true,
      field: 'reviews',
    },
    price: {
      type: STRING(11),
      allowNull: true,
      field: 'price',
    },
    time: {
      type: STRING(11),
      allowNull: true,
      field: 'time',
    },
    pic: {
      type: STRING(11),
      allowNull: true,
      field: 'pic',
    },
  }, {
    tableName: 'ty-verifys',
    timestamps: false,
  });
};
