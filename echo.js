'use strict';
const promise = require('bluebird');
const appInfo = require('./package.json');

exports.create = function (config, logger) {

  return (function () {
    return {
      echo: function () {
        return promise.resolve({
          author: appInfo.author,
          description: appInfo.description,
          name: appInfo.name,
          node: process.version,
          version: appInfo.version
        });
      }
    };
  }());
};
