import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {registerApplication, start} from 'single-spa';

Vue.config.productionTip = false


async  function loadScript(url) {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    })
}

/**
 * 1.注册子应用
 * @param appName: string 名字
 * @param applicationOrLoadingFn: promise 加载方法
 * @param ActivityFn: function 激活函数
 * @param CustomPropsFn: function
 */
registerApplication("child",
    async () => {
        // console.log("☆加载child应用");

        // systemJS
        await loadScript("http://localhost:9100/js/chunk-vendors.js");
        await loadScript("http://localhost:9100/js/app.js"); // 加载这个的时候引入了window.singleVue
        return window.singleVue
    },
    location => location.pathname.startsWith("/child") // 用户切换到/child 的路径下，加载子应用
)

// 2.启动子应用
start()


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
