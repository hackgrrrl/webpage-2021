module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/webpage-2021/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
