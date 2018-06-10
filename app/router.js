'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/getBanner', controller.banner.index);
  router.get('/getBooks', controller.book.index);
  router.get('/getClass', controller.class.index);
  router.get('/getVerify', controller.verify.index);
  router.get('/getNews', controller.news.index);
};
