'use strict';

module.exports = function(app) {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  return app.model.define('tyRecode', {
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
    current: {
      type: INTEGER(11),
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
  }, {
    tableName: 'ty-recode',
  });
};
