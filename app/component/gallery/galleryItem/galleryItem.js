'use strict';

module.exports = {
  template: require('./galleryItem.html'),
  controllerAs: 'galleryItemCtrl',
  controller: ['$log', '$rootScope', 'galleryService', function($log, $rootScope, galleryService){
    this.$onInit = () => {
      $log.debug('#galleryItemCtrl');

      this.showEditGallery = false;

    };
  }],
  bindings: {
    gallery: '<',
  },

};
