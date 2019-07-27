import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueRouter);

// 路由配置
const Routers = [
    {
        path: '/index',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/case',
        meta: {
            title: '案例'
        },
        component: (resolve) => require(['./views/case.vue'], resolve)
    },
    {
        path: '/product',
        meta: {
            title: '产品'
        },
        component: (resolve) => require(['./views/product.vue'], resolve)
    },
    {
        path: '/view',
        meta: {
            title: '产品详情'
        },
        component: (resolve) => require(['./views/view.vue'], resolve)
    },
    {
        path: '/office',
        meta: {
            title: '具体案例'
        },
        component: (resolve) => require(['./views/office.vue'], resolve)
    },
    {
        path: '*',
        redirect: '/index'
    }
];
const RouterConfig = {
    // 使用 HTML5 的 History 路由模式
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
});

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    render: h => {
        return h(App)
    }
});