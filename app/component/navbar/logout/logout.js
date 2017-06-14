'use strict';

module.exports = {
  template: require('./logout.html'),
  controllerAs: 'logoutCtrl',
  controller: ['$log', '$location', 'authService',
    function($log, $location, authService){
      this.$onInit = () => {
        $log.debug('#logoutCtrl');

        // authService.getToken()
        // .then(() => $location.url('/landing'));

        this.logout = function() {
          $log.debug('#logoutCtrl.logout');
          authService.logout(this.user)
          .then(() => $location.url('/join'));
        };
      };
    }],
};
