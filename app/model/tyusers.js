/* jshint indent: 2 */

'use strict';

module.exports = function(app) {
  const { STRING, INTEGER } = app.Sequelize;
  return app.model.define('tyUsers', {
    id: {
      type: INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    uid: {
      type: STRING(1024),
      allowNull: true,
    },
    nickName: {
      type: STRING(1024),
      allowNull: true,
    },
    address: {
      type: STRING(1024),
      allowNull: true,
    },
    yanzhi: {
      type: INTEGER(10),
      allowNull: true,
    },
    youhuijuan: {
      type: STRING(1024),
      allowNull: true,
    },
    shoucang: {
      type: STRING(1024),
      allowNull: true,
    },
    baoming: {
      type: STRING(1024),
      allowNull: true,
    },
    goumai: {
      type: STRING(1024),
      allowNull: true,
    },
    zhengshu: {
      type: STRING(1024),
      allowNull: true,
    },
    phone: {
      type: STRING(1024),
      allowNull: true,
    },
    avatarUrl: {
      type: STRING(1024),
      allowNull: true,
    },
    gender: {
      type: STRING(1024),
      allowNull: true,
    },
    city: {
      type: STRING(1024),
      allowNull: true,
    },
    province: {
      type: STRING(1024),
      allowNull: true,
    },
    country: {
      type: STRING(1024),
      allowNull: true,
    },
    language: {
      type: STRING(1024),
      allowNull: true,
    },
    anli: {
      type: STRING(1024),
      allowNull: true,
    },
  }, {
    tableName: 'ty-users',
    timestamps: false,
  });
};
