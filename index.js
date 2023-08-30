const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const serverProxy = createProxyMiddleware({
  target: 'https://example.api.com',
  changeOrigin: true,
})
app.use(cors());
app.use('/',  serverProxy);
app.listen(process.env.PORT || 3001);
