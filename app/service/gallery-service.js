'use strict';

module.exports = [
  '$q',
  '$log',
  '$http',
  'authService',
  function($q, $log, $http, authService) {
    $log.debug('Gallery Service');

    let service = {};

    service.galleries = [];

    service.createGallery = (gallery) => {
      $log.debug('#createGallery');
      return authService.getToken()
      .then(token => {
        let config = {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };
        return $http.post(`${__API_URL__}/api/gallery`, gallery, config);
      })
      .then(res => {
        $log.log('gallery created');
        let gallery = res.data;
        service.galleries.unshift(gallery);
        return gallery;
      })
      .catch(err => {
        $log.error(err.message);
        return $q.reject(err);
      });
    };

    service.fetchGalleries = () => {
      $log.debug('#service.fetchGalleries');

      return authService.getToken()
      .then(token => {
        let config = {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };
        return $http.get(`${__API_URL__}/api/gallery`, config);
      })
      .then(res => {
        $log.log('gallery fetched');
        service.galleries = res.data;
        return res.data;
      })
      .catch(err => {
        $log.error(err.message);
        $q.reject(err);
      });
    };

    service.updateGallery = (gallery) => {
      $log.debug('#galleryService.updateGallery');

      return authService.getToken()
      .then(token => {
        let url = `${__API_URL__}/api/gallery/${gallery._id}`;
        let config = {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };
        return $http.put(url, gallery, config);
      })
      .then(res => {
        service.galleries.forEach((ele, idx) => {
          if(ele._id === res.data._id) service.galleries[idx] = res.data;
        });
        return res.data;
      })
      .catch(err => {
        $log.error(err.message);
        return $q.reject(err);
      });
    };

    service.deleteGallery = (gallery) => {
      $log.debug('#service.deleteGallery');

      return authService.getToken()
      .then(token => {
        let config = {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };
        return $http.delete(`${__API_URL__}/api/gallery/${gallery._id}`, config);
      })
      .then(() => {
        // $log.log('gallery deleted');
        service.galleries.forEach((ele, idx) => {
          if(ele._id === gallery._id) service.galleries.splice(idx, 1);
        });
      })
      .catch(err => {
        $log.error(err.message);
        $q.reject(err);
      });
    };

    return service;
  },
];
