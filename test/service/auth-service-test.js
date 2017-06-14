'use strict';

describe('Auth service', function(){
  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($httpBackend, $window, $rootScope, authService) => {
      this.$httpBackend = $httpBackend;
      this.$window = $window;
      this.$rootScope = $rootScope;
      this.authService = authService;
    });
  });
  afterEach(() => {
    this.$rootScope.$apply();
  });

  describe('authService.getToken', () => {
    it('should return a token', () => {
      this.authService.token = null;
      this.$window.localStorage.setItem('token', 'test token');

      this.authService.getToken()
      .then(token => {
        expect(token).toEqual(this.$window.localStorage.token);
      })
      .catch(err => {
        expect(err).toEqual(null);
      });
    });

  });

  // describe('#authService.signup', () => {
  //   it('should make a valid post request', () => {
  //     this.authService.token = null;
  //     let expectUrl = `${__API_URL__}/api/signup`;
  //     let expectHeaders = {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     };
  //     let expectUser = {
  //       username: 'testuser',
  //       password: '1234567890',
  //       email: 'test@test.com',
  //     };
  //
  //     this.$httpBackend.expectPOST(expectUrl, expectUser, expectHeaders)
  //     .respond(200, 'test token');
  //
  //     let req = this.authService.signup(expectUser);
  //     expect(req).not.toThrow();
  //     this.$httpBackend.flush();
  //   });
  // });

  // describe('#authService.login', () => {
  //
  // });
  //
  // describe('#authService.logout', () => {
  //
  // });

});
