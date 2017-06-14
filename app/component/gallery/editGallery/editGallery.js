'use strict';

module.exports = {
  template: require('./editGallery.html'),
  controllerAs: 'editGalleryCtrl',
  controller: ['$log', 'galleryService', function($log, galleryService){
    this.$onInit = () => {
      $log.debug('#editGalleryCtrl');

      this.updateGallery = () => {
        return galleryService.updateGallery(this.gallery)
        .then(() => $log.log('gallery updated'),
         err => $log.error(err));
      };
    };
  }],
  bindings: {
    gallery: '<',
  },
};
