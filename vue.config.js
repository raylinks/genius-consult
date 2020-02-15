module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import '@/assets/style/scss/_variables.scss';
          @import '@/assets/style/scss/custom.scss';
         `
      }
    }
  }
}
