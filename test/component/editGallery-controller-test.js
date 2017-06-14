// 'use strict';
//
// describe('editGallery Controller', function(){
//   beforeEach(() => {
//     angular.mock.module('cfgram');
//     angular.mock.inject(($rootScope, $window, $httpBackend, $componentController) => {
//       this.$rootScope = $rootScope;
//       this.$window = $window;
//       this.$httpBackend = $httpBackend;
//       this.$componentController = $componentController;
//       this.editGalleryCtrl = $componentController('editGallery');
//
//       this.mockBindings = {
//         gallery: {
//           name: 'galleryOne',
//           desc: 'galleryOne',
//           pics: [],
//           _id: '5678',
//         },
//       };
//
//     });
//   });
//   beforeEach(() => {
//     this.editGalleryCtrl.$onInit();
//     this.$window.localStorage.setItem('token', 'test token');
//   });
//   afterEach(() => {
//     this.$window.localStorage.removeItem('token');
//     // this.$httpBackend.flush();
//     this.$rootScope.$apply();
//   });
//
//   describe('editGallery #updateGallery method', () => {
//     it('edits a gallery', () => {
//       let expectUrl = 'http://localhost:3000/api/gallery';
//       let expectHeaders = {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${this.$window.localStorage.token}`,
//       };
//       let expectGallery = {
//         name: 'gallery-one',
//         desc: 'description one',
//       };
//
//       this.$httpBackend.expectPUT(expectUrl, expectGallery, expectHeaders)
//       .respond(200, expectGallery);
//       this.editGalleryCtrl.gallery = expectGallery;
//       expect(this.editGalleryCtrl.updateGallery).not.toThrow();
//
//     });
//   });
// });
