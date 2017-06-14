'use strict';

module.exports = {
  template: require('./picDelete.html'),
  controllerAs: 'picDeleteCtrl',
  bindings: {
    pic: '<',
    gallery: '<',
  },
  controller: ['$log', 'picService',
    function($log, picService){

      $log.debug('#picDeleteCtrl');

      this.picDelete = () => {
        return picService.deletePic(this.gallery, this.pic)
        .then(() => $log.log('pic deleted'),
          err => $log.error(err));
      };
    }],
};
