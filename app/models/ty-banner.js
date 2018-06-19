/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ty-banner', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    linkto: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'ty-banner'
  });
};
