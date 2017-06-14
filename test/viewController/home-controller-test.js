// 'use strict';
//
// describe('home controller', function(){
//   beforeEach(() => {
//     angular.mock.module('cfgram');
//     angular.mock.inject(($rootScope, $httpBackend, $window, $controller, galleryService) => {
//       this.$rootScope = $rootScope;
//       this.$httpBackend = $httpBackend;
//       this.$window = $window;
//       this.homeCtrl = new $controller('HomeController');
//       this.galleryService = galleryService;
//     });
//   });
//
//   beforeEach(() => {
//     this.$window.localStorage.setItem('token', 'test token');
//   });
//
//   afterEach(() => {
//     this.$window.localStorage.removeItem('token');
//     this.$rootScope.$apply();
//   });
//
//   describe('controller initial values', () => {
//     it('has proper initial title value', () => {
//       let expectUrl = 'http://localhost:3000/api/gallery';
//       let expectHeaders = {
//         Accept: 'application/json',
//         Authorization: `Bearer ${this.$window.localStorage.token}`,
//       };
//       let expectGallery = {
//         name: 'test1',
//         desc: 'testdesc1',
//       };
//
//       this.$httpBackend.expectGET(expectUrl, expectHeaders)
//       .respond(200, expectGallery);
//
//       this.homeCtrl.$onInit();
//
//       expect(this.homeCtrl.title).toEqual('Home Title');
//       this.$httpBackend.flush();
//     });
//   });
// });
