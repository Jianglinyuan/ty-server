/* jshint indent: 2 */

'use strict';

module.exports = app => {
  const { STRING, INTEGER, TEXT } = app.Sequelize;
  return app.model.define('tyStudents', {
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
      type: TEXT('long'),
      allowNull: true,
    },
    pic: {
      type: STRING(1024),
      allowNull: true,
    },
  }, {
    tableName: 'ty-students',
    timestamps: false,
  });
};
