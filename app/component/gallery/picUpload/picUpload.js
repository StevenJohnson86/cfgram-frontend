'use strict';

module.exports = {
  template: require('./picUpload.html'),
  controllerAs: 'picUploadCtrl',
  bindings: {
    gallery: '<',
  },
  controller: ['$log', 'picService',
    function($log, picService) {
      this.$onInit = () => {
        $log.debug('#picUploadCtrl');

        this.pic = {};

        this.uploadPic = () => {
          return picService.uploadPic(this.gallery, this.pic)
          .then(() => {
            this.pic.name = null;
            this.pic.desc = null;
            this.pic.file = null;
          })
          .catch(err => $log.error(err));
        };

      };
    }],
};
