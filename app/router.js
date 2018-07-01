'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/getBanner', controller.banner.index);

  router.get('/getBooks', controller.book.index);
  router.post('/buyBook', controller.book.buy);
  router.get('/getBuyRecored', controller.book.getBuyRecored);

  router.get('/getClass', controller.class.index);
  router.get('/getVerify', controller.verify.index);
  router.get('/getNews', controller.news.index);
  router.get('/login', controller.user.login);
  router.get('/getUser', controller.user.getUser);
  router.get('/user/goodsIsFavorite', controller.user.goodsIsFavorite);
  router.get('/user/goodsFavorite', controller.user.goodsFavorite);
  router.get('/user/goodsFavoriteDelete', controller.user.goodsFavoriteDelete);

  router.get('/getAnlis', controller.anlis.index);
  router.get('/getBinglis', controller.binglis.index);
  router.get('/likeAnli', controller.anlis.likeAnli);
  router.get('/likeBingli', controller.binglis.likeBingli);

  router.get('/getTeachers', controller.teacher.index);
  router.get('/getStudents', controller.student.index);


  // POST请求
  router.post('/modifyYanzhi', controller.user.modifyYanzhi);
  router.post('/reviewAnli', controller.anlis.reviewAnli);
  router.post('/reviewBingli', controller.binglis.reviewBingli);
  router.post('/modifyAnli', controller.anlis.modifyAnli);
  router.post('/modifyBingli', controller.binglis.modifyBingli);

  router.post('/upload', controller.upload.uploadImg);
  router.post('/submitForm', controller.form.submit);

};
