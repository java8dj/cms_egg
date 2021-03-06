'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.webSite.home.index);

  router.get('/about/profile', controller.webSite.home.profile);
  router.get('/about/culture', controller.webSite.home.culture);
  router.get('/about/honor', controller.webSite.home.honor);

  router.get('/news/company', controller.webSite.home.news);
  router.get('/news/industry', controller.webSite.home.industry);
  router.get('/news/detial', controller.webSite.home.newsDetail);

  router.get('/product/fertilizer', controller.webSite.home.fertilizer);
  router.get('/product/pesticide', controller.webSite.home.pesticide);
  router.get('/product/farmtool', controller.webSite.home.farmtool);
  router.get('/product/detial', controller.webSite.home.productDetail);

  router.get('/contact', controller.webSite.home.contact);
};