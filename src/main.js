import Vue from "vue";
import App from "./App.vue";
//引入 SCSS 檔案
// import "@/assets/scss/main.scss";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
