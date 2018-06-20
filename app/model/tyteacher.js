/* jshint indent: 2 */

'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  return app.model.define('tyTeachers', {
    id: {
      type: INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING(1024),
      allowNull: true,
      defaultValue: '',
    },
    title: {
      type: STRING(1024),
      allowNull: true,
      defaultValue: '',
    },
    jieshao: {
      type: STRING(255),
      allowNull: true,
    },
    pic: {
      type: STRING(1024),
      allowNull: true,
    },
  }, {
    tableName: 'ty-teachers',
    timestamps: false,
  });
};
