/* jshint indent: 2 */

'use strict';

module.exports = function(app) {
  const { STRING, INTEGER } = app.Sequelize;
  return app.model.define('tyIndexform', {
    id: {
      type: INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    name: {
      type: STRING(255),
      allowNull: true,
      field: 'name',
    },
    wechat: {
      type: STRING(1024),
      allowNull: true,
      defaultValue: '',
      field: 'wechat',
    },
    phone: {
      type: STRING(255),
      allowNull: true,
      field: 'phone',
    },
    time: {
      type: STRING(1024),
      allowNull: true,
      field: 'time',
    },
  }, {
    tableName: 'ty-indexform',
    timestamps: false,
  });
};
