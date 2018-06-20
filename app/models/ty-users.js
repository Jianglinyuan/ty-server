/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ty-users', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    uid: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    nickName: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    yanzhi: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    youhuijuan: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    shoucang: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    baoming: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    goumai: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    zhengshu: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    avatarUrl: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    province: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    language: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    anli: {
      type: DataTypes.STRING(1024),
      allowNull: true
    }
  }, {
    tableName: 'ty-users'
  });
};
