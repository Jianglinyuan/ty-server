'use strict';

// had enabled by egg
// exports.static = true;

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};

exports.qiniu = {
  enable: true,
  package: 'egg-qiniu-upload',
};
