import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Vue.config.productionTip = false
//
// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')


// 1.添加挂载配置
let instance = null;
function render(props) {
    instance = new Vue({
        router,
        render: h => h(App)
    }).$mount('#app') // 这是挂载到自己的html，基座会拿到这个挂载后的完整html，将其插入
}

// 2+3.生成接入协议和暴露接入协议
export async function bootstrap(props) {

}
export async function mount(props) {
    console.log(props)
    render(props);
}
export async function unmount(props) {
    instance.$destroy();
}

// 4.修改webpack配置，让当前应用的方法挂载到window

// 5.修改路由基准

// 6.修改webpack配置，添加公共路径
if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

// 7.配置子应用独立运行
// (https://qiankun.umijs.org/zh/faq)
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}
