'use strict';

module.exports = {
  template: require('./login.html'),
  controllerAs: 'loginCtrl',
  controller: ['$log', '$location', 'authService',
    function($log, $location, authService){
      this.$onInit = () => {
        $log.debug('#loginCtrl');

        authService.getToken()
        .then(() => $location.url('/home'));

        this.login = function() {
          $log.debug('loginCtrl.login');
          authService.login(this.user)
          .then(() => $location.url('/home'));
        };
      };
    }],
};
