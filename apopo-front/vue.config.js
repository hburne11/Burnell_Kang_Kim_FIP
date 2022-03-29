const BASE_URL = "http://localhost:3000";
const UMS_PATH = "/newsletter";
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
      '/newsletter': {
        target: `${BASE_URL + UMS_PATH}`,
        changeOrigin: true,
        pathRewrite: { '^/newsletter': ''}
      },

      '/gallery-api': {
        target: `${API_URL}`,
        changeOrigin: true,
        pathRewrite: { '^/gallery-api': ''}
      }
      
    }
  }
};
