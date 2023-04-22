module.exports = {
  staticFileGlobs: [
    'build/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}',
    'public/**/*.{png,jpg,gif,svg,eot,ttf,woff}',
    'manifest.json',
  ],
  runtimeCaching: [
    {
      urlPattern: /https:\/\/myapi\.com\/data/,
      handler: 'networkFirst',
    },
  ],
  verbose: true,
  stripPrefix: 'build/',
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/^(?!\/__)/],
};
