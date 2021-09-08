const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/notion',
    createProxyMiddleware({
      target: 'https://api.notion.com/',
      pathRewrite: { '^/notion/': '' },
      changeOrigin: true,
    })
  );
};
