'use strict';

module.exports = function(app) {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  return app.model.define('tyShoprecord', {
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
    total: {
      type: INTEGER(11),
      allowNull: true,
    },
    user: {
      type: STRING(1024),
      allowNull: true,
    },
    created_at: {
      type: DATE,
      allowNull: true,
    },
    updated_at: {
      type: DATE,
      allowNull: true,
    },
    phone: {
      type: STRING(1024),
      allowNull: true,
    },
    name: {
      type: STRING(1024),
      allowNull: true,
    },
    address: {
      type: STRING(1024),
      allowNull: true,
    },
    pic: {
      type: STRING(1024),
      allowNull: true,
    },
  }, {
    tableName: 'ty-shoprecord',
  });
};
