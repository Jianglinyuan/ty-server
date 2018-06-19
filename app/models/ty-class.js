/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ty-class', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ups: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    reviews: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    price: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    time: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    pic: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    des: {
      type: DataTypes.STRING(1024),
      allowNull: true
    }
  }, {
    tableName: 'ty-class'
  });
};
