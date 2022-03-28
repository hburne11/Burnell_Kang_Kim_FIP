
// API endpoint
const API_URL = "http://localhost/Burnell_Kang_Kim_FIP/database/api/index.php";

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/sass/_vars.scss";
        @import "@/assets/sass/_reset.scss";`,
      },
    },
  },
  
  devServer: {
    proxy: {
    //   '/users': {
    //     target: `${BASE_URL + UMS_PATH}`,
    //     changeOrigin: true,
    //     pathRewrite: { '^/users': ''}
    //   },

      '/galleryapi': {
        target: `${API_URL}`,
        changeOrigin: true,
        pathRewrite: { '^/galleryapi': ''}
      }
      
    }
  }
};
