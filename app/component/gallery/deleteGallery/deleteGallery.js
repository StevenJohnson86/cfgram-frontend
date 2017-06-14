'use strict';

module.exports = {
  template: require('./deleteGallery.html'),
  controllerAs: 'deleteGalleryCtrl',
  controller: ['$log', 'galleryService', function($log, galleryService){
    this.$onInit = () => {

      $log.debug('#deleteGalleryCtrl');

      this.deleteGallery = () => {
        return galleryService.deleteGallery(this.gallery)
        .then(() => $log.log('gallery deleted'),
          err => $log.error(err));
      };
    };
  }],
  bindings: {
    gallery: '<',
  },
};
