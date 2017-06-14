'use strict';

module.exports = [
  '$log',
  '$rootScope',
  '$window',
  '$location',
  'authService',
  'galleryService',
  function($log, $rootScope, $window, $location, authService, galleryService) {
    this.$onInit = () => {
      $log.debug('HomeController()');
      if(!$window.localStorage.token) {
        authService.getToken()
        .then(
          () => $location.url('/home'),
          () => $location.url('/signup')
        )
        .catch(err => $log.error(err));
      }
      this.title = 'Home Title';
      this.galleries = [];
      this.currentGallery;

      this.fetchGalleries = () => {
        $log.log('homeCtrl fetchGal called');
        return galleryService.fetchGalleries()
        .then(galleries => {
          this.galleries = galleries;
          // this.currentGallery = this.galleries[0];
          $log.log('homeCtrl gallery fetched', galleries);
        })
        .catch(err => $log.error(err));
      };
      this.fetchGalleries();
      $rootScope.$on('$locationChangeSuccess', () => {
        return this.fetchGalleries();
      });

    };
  }];
