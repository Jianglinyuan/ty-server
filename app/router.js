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
  router.get('/login', controller.user.login);
  router.get('/getUser', controller.user.getUser);
  router.get('/user/goodsIsFavorite', controller.user.goodsIsFavorite);
  router.get('/user/goodsFavorite', controller.user.goodsFavorite);
  router.get('/user/goodsFavoriteDelete', controller.user.goodsFavoriteDelete);
};
