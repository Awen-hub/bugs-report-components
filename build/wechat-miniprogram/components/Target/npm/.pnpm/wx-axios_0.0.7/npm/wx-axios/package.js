"use strict";

module.exports = {
  "name": "wx-axios",
  "version": "0.0.7",
  "description": "Promise based HTTP client for the browser/node.js/wechat miniprogram ",
  "main": "index.js",
  "scripts": {
    "test": "grunt test && bundlesize",
    "start": "node ./sandbox/server.js",
    "build": "NODE_ENV=production grunt build",
    "preversion": "npm test",
    "version": "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
    "postversion": "git push && git push --tags",
    "examples": "node ./examples/server.js",
    "wepy-example": "cd examples/wepy-wechat-weapp && npm install && wepy build --watch",
    "coveralls": "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
    "fix": "eslint --fix lib/**/*.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/SoloJiang/axios.git"
  },
  "keywords": ["xhr", "http", "ajax", "promise", "node", "wechat", "miniprogram"],
  "author": "SoloJiang",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/SoloJiang/axios/issues"
  },
  "homepage": "https://github.com/SoloJiang/axios",
  "devDependencies": {
    "bundlesize": "^0.17.0",
    "coveralls": "^3.0.0",
    "es6-promise": "^4.2.4",
    "grunt": "^1.0.2",
    "grunt-banner": "^0.6.0",
    "grunt-cli": "^1.2.0",
    "grunt-contrib-clean": "^1.1.0",
    "grunt-contrib-watch": "^1.0.0",
    "grunt-eslint": "^20.1.0",
    "grunt-karma": "^2.0.0",
    "grunt-mocha-test": "^0.13.3",
    "grunt-ts": "^6.0.0-beta.19",
    "grunt-webpack": "^1.0.18",
    "istanbul-instrumenter-loader": "^1.0.0",
    "jasmine-core": "^2.4.1",
    "karma": "^1.3.0",
    "karma-chrome-launcher": "^2.2.0",
    "karma-coverage": "^1.1.1",
    "karma-firefox-launcher": "^1.1.0",
    "karma-jasmine": "^1.1.1",
    "karma-jasmine-ajax": "^0.1.13",
    "karma-opera-launcher": "^1.0.0",
    "karma-safari-launcher": "^1.0.0",
    "karma-sauce-launcher": "^1.2.0",
    "karma-sinon": "^1.0.5",
    "karma-sourcemap-loader": "^0.3.7",
    "karma-webpack": "^1.7.0",
    "load-grunt-tasks": "^3.5.2",
    "minimist": "^1.2.0",
    "mocha": "^5.2.0",
    "sinon": "^4.5.0",
    "typescript": "^2.8.1",
    "url-search-params": "^0.10.0",
    "webpack": "^1.13.1",
    "webpack-dev-server": "^1.14.1"
  },
  "browser": {
    "./lib/adapters/http.js": "./lib/adapters/xhr.js"
  },
  "typings": "./index.d.ts",
  "dependencies": {
    "follow-redirects": "^1.4.1",
    "is-buffer": "^2.0.2"
  },
  "bundlesize": [{
    "path": "./dist/axios.min.js",
    "threshold": "5kB"
  }]
};