/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ty-teachers', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(1024),
      allowNull: true,
      defaultValue: ''
    },
    title: {
      type: DataTypes.STRING(1024),
      allowNull: true,
      defaultValue: ''
    },
    jieshao: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pic: {
      type: DataTypes.STRING(1024),
      allowNull: true
    }
  }, {
    tableName: 'ty-teachers'
  });
};
