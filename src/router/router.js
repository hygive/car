import Vue from 'vue'
import Router from 'vue-router'

import Home from "../views/home/index.vue"
import infor from "../views/infor/index.vue"
import video from "../views/video/index.vue"
import mine from "../views/mine/index.vue"
import search from "../views/search/index.vue"
import detail from "../views/detail_x/index.vue"
import search_x from "../views/search_x/index.vue"
import search_detail from "../views/search_detail/index.vue"
Vue.use(Router);

const routes = [{
        path: '/home/:type',
        component: Home,
        name: "home",
        meta: {
            // title: "搜索",
            flag: true
        }
    },
    {
        path: '/video',
        component: video,
        name: "video",
        meta: {
            // title: "搜索",
            flag: true
        }
    },
    {
        path: '/infor',
        component: infor,
        name: "infor",
        meta: {
            // title: "搜索",
            flag: true
        }
    },
    {
        path: '/mine',
        component: mine,
        name: "mine",
        meta: {
            // title: "搜索",
            flag: true
        }
    },
    {
        path: '/search',
        component: search,
        name: "search",
        meta: {
            title: "搜索",
            flag: false
        }
    },
    {
        path: '/detail',
        component: detail,
        name: "detail",
        meta: {
            // title: "搜索",
            flag: false
        }
    },
    {
        path: '/search_x',
        component: search_x,
        name: "search_x",
        meta: {
            // title: "搜索",
            flag: false
        }
    },
    //搜索详情页
    {
        path: '/search_detail',
        component: search_detail,
    },
    {
        path: '*',
        redirect: '/home/all?type=__all__'
    },
    {
        path: '',
        redirect: '/home/all?type=__all__'
    }
];

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition
    } else {
        return { x: 0, y: 0 }
    }
}

const router = new Router({
    mode: 'history',
    routes,
    scrollBehavior
})

export default router