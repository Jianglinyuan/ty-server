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

  config.cluster = {
    listen: {
      port: 9501,
    },
  };

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ 'http://siyan.tech', 'https://siyan.tech', 'http://photo.siyan.tech' ],
  };

  config.qiniu = {
    // I ussually set the key into `~/.zshrc`, and I can get the value via `process.env.key`, It's very safe~
    ak: 'naEiwyfhSfMwmHgU1l-jaojDog2_dVdvrJCu6_jQ',
    sk: 'PWKu2j9lqnZRxwY4jHjkZcz1gVrT7dLj37J0h4mf',
    bucket: 'dogod',
    baseUrl: 'http://photo.siyan.tech/',
    zone: 'Zone_z0',
    app: true, // default value
    agent: false, // default value
  };

  return config;
};
