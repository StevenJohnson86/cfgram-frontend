'use strict';

module.exports = ['$log', '$location', '$rootScope', 'authService',
  function($log, $location, authService) {
    this.$onInit = () => {

      $log.debug('LandingController');

      let url = $location.url();
      this.showSignup = url === '/join#signup' || url === '/join';

      this.title = 'Landing Title';

    };
  }];
