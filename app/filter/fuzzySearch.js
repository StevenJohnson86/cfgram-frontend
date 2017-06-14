'use strict';

module.exports = function() {
  return function(galleries, searchStr){

    if(!searchStr) return galleries;

    let createRegExp = new RegExp(`.*${searchStr.toLowerCase().split('').join('.*')}.*`);
    return galleries.filter(gal => createRegExp.test(gal.name.toLowerCase()));

  };
};
