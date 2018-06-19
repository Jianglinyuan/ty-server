/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ty-indexform', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    wechat: {
      type: DataTypes.STRING(1024),
      allowNull: true,
      defaultValue: ''
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    time: {
      type: DataTypes.STRING(1024),
      allowNull: true
    }
  }, {
    tableName: 'ty-indexform'
  });
};
