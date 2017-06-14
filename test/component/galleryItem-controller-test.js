'use strict';

describe('galleryItemCtrl', function(){
  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $window, $httpBackend, $componentController) => {
      this.$rootScope = $rootScope;
      this.$window = $window;
      this.$httpBackend = $httpBackend;
      this.$componentController = $componentController;
      this.galleryItemCtrl = $componentController('galleryItem');
    });
  });
  beforeEach(() => {
    this.galleryItemCtrl.$onInit();
    this.$window.localStorage.setItem('token', 'test token');
  });
  afterEach(() => {
    this.$window.localStorage.removeItem('token');
    this.$rootScope.$apply();
  });

  describe('galleryItemCtrl initial values', () => {
    it('has proper initial values', () => {
      expect(this.galleryItemCtrl.showEditGallery).toEqual(false);
    });
  });
});
