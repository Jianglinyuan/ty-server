/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ty-verifys', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content: {
      type: DataTypes.STRING(1024),
      allowNull: true,
      defaultValue: ''
    },
    ups: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reviews: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    price: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    time: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    pic: {
      type: DataTypes.STRING(1024),
      allowNull: true
    }
  }, {
    tableName: 'ty-verifys'
  });
};
