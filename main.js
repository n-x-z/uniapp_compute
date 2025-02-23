import App from './App'
import messages from './locale/index'
import {showLoading,showToast} from '@/utils/utils.js';

Vue.prototype.$showLoading=showLoading;
Vue.prototype.$showToast=showToast;
// import VConsole from "vconsole";
// const vConsole = new VConsole();

let i18nConfig = {
  locale: uni.getLocale(),
  messages
}

// #ifndef VUE3
import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n(i18nConfig)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  i18n,
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import { createI18n } from 'vue-i18n'
import config from './config';
const i18n = createI18n(i18nConfig)
export function createApp() {
  const app = createSSRApp(App)
  app.use(i18n)
  return {
    app
  }
}
// #endif

  Vue.prototype.requestPlus=function (options) {
	  
    return new Promise((resolve, reject) => {
        uni.request({
          url: options.url, // 服务器url
          method: options.method || 'GET', // 请求方法，默认为GET
          data: options.data || {}, // 请求参数
		  header: {...options.header, shopId: 8},
          success: (res) => {
            // 请求成功处理逻辑
            if (options.success) {
              options.success(res);
            }
            resolve(res);
          },
          fail: (err) => {
            // 请求失败处理逻辑
            if (options.fail) {
              options.fail(err);
            }
            reject(err);
          },
          complete: (res) => {
            // 请求完成处理逻辑
            if (options.complete) {
              options.complete(res);
            }
          }
        });
      });
    }
