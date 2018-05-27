'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1527426533407_7051';

  // add your config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'xadmin',
    host: '139.196.79.195',
    port: '3306',
    username: 'root',
    password: 'Jly921027.',
    timestamps: false,
  };

  return config;
};
