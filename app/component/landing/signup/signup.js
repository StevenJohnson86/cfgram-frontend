'use strict';

module.exports = {
  template: require('./signup.html'),
  controllerAs: 'signupCtrl',
  controller: [
    '$log',
    '$location',
    'authService',
    function($log, $location, authService) {
      this.$onInit = () => {
        $log.debug('#signupCtrl');

        authService.getToken()
        .then(() => $location.url('/home'));

        this.signup = function(user){
          $log.debug('#signupCtrl.signup');

          authService.signup(user)
          .then(() => $location.url('/home'));
        };
      };
    },
  ],
};
