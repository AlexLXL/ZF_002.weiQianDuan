import Vue from 'vue'
import App from './App.vue';
import router from './router'
import {registerMicroApps, start} from 'qiankun';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

// 1.1.添加注册配置
const apps = [
    {
        name: "firstChild", // 应用名称
        entry: "http://localhost:9101/", // 默认加载这个html，解析里面的js 动态执行 （子应用必须支持跨域）
        fetch,
        container: "#firstChild", // 容器名称
        activeRule: '/firstChild', // 激活的路径
        props: {a: 1} // 传参(可以把vuex传过去，使用vuex来进行通信
    },
    {
        name: "secondChild", // 应用名称
        entry: "http://localhost:9102", // 默认加载这个html，解析里面的js 动态执行 （子应用必须支持跨域）
        fetch,
        container: "#secondChild", // 容器名称
        activeRule: '/secondChild' // 激活的路径
    },
]

// 1.注册应用
registerMicroApps(apps, {
    // 可添加声明周期beforeMount、mount...
});
// 2.启用qainkun
start({
    prefetch: false // 取消预加载
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
