/* jshint indent: 2 */
'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  return app.model.define('tyBanner', {
    id: {
      type: INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    url: {
      type: STRING(255),
      allowNull: true,
    },
    linkto: {
      type: STRING(255),
      allowNull: true,
    },
  }, {
    tableName: 'ty-banner',
    timestamps: false,
  });
};
