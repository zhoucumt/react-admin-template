const proxy = require('http-proxy-middleware');
console.log('in---------222');

module.exports = function(app) {
  app.use(
    proxy(
      '/hrm', {
        target: 'https://www.easy-mock.com/mock/5be94defd04fbb4e5d598e1b',
        changeOrigin: true
      }
    )
  )
};
