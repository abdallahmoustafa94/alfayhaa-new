const { i18n } = require('./next-i18next.config');
const withPWA = require('next-pwa')({
  dest: 'public'
});
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
  },
  i18n,
  typescript: {
    ignoreBuildErrors: true,
  },
  devServer: {
    port: 80,
  },
});
