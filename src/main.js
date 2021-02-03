import Vue from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from 'single-spa-vue';

Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

// 1.添加配置
const appOptions = {
    el: '#child', // 这个指向基应用的元素
    router,
    render: h => h(App)
}

// 2.生成接入协议
const vueLifeCycle = singleSpaVue({
    Vue,
    appOptions
})

// 3.暴露接入协议
export const bootstrap = vueLifeCycle.bootstrap;
export const mount = vueLifeCycle.mount;
export const unmount = vueLifeCycle.unmount;

// 4.将子应用打包成lib给基应用使用, 添加打包配置vue.config.js

// 5.修改路由基准
// 6.设置__webpack_public_path__（子应用切换路由发请求相对基应用的，所以请求的端口变成了父应用的: http://locahost:8080/）
if (window.singleSpaNavigate) {
    __webpack_public_path__ = 'http://localhost:9100/'; // webpack打包是会加上，请求就会变成绝对路径
}

// 7.配置子应用独立运行
if (!window.singleSpaNavigate) {
    delete appOptions.el;
    new Vue(appOptions).$mount('#app');
}


