'use strict';

module.exports = ['$log', '$q', '$http', 'Upload', 'authService',
  function($log, $q, $http, Upload, authService){
    $log.debug('Pic Service');

    let service = {};

    service.uploadPic = function(gallery, pic){
      $log.debug('#uploadPic');

      return authService.getToken()
      .then(token => {
        let url = `${__API_URL__}/api/gallery/${gallery._id}/pic`;
        let headers = {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        };

        return Upload.upload({
          url,
          headers,
          method: 'POST',
          data: {
            name: pic.name,
            desc: pic.desc,
            file: pic.file,
          },
        });
      })
      .then(res => {
        gallery.pics.push(res.data);
        return res.data;
      })
      .catch(err => {
        $log.error(err.message);
        $q.reject(err);
      });
    };

    service.deletePic = function(gallery, pic){
      $log.debug('#deletePic');

      return authService.getToken()
      .then(token => {
        let url = `${__API_URL__}/api/gallery/${gallery._id}/pic/${pic._id}`;
        let config = {
          headers: {
            Accept: 'application/json, text/plain, */*',
            Authorization: `Bearer ${token}`,
          },
        };
        $http.delete(url, config);
      })
      .then(() => {
        $log.log('pic deleted');
        gallery.pics.forEach((ele, i) => {
          if(ele._id === pic._id) gallery.pics.splice(i, 1);
        }, err => {
          $log.error(err);
          $q.reject(err);
        });
      });
    };

    return service;
  }];
