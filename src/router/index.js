import Vue from 'vue'
import Router from 'vue-router'

import Login from '../pages/Login'

import Home from '../pages/Home'
import Welcome from '../pages/home/Welcome'
import Hello from '../pages/home/Hello'
import IntroBranch from '../pages/home/IntroBranch'

import Features from '../pages/Features'

import Demo from '../pages/Demo'
import BasicControl from '../pages/demo/BasicControl'
import PropsTester from '../pages/demo/PropsTester'
import TabTester from '../pages/demo/TabTester'


// add global-level functionality to Vue
// call VueRouter.install(Vue)
Vue.use(Router)

var router = new Router({
    // 使用 HTML 5 模式
    mode: 'history',
    base: __dirname,
    routes: [{
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/home',
            component: Home,
            // 設定此路由(包括children路由)的meta值
            // 可以在全域 router.beforeEach 中篩選識別所有流過的路由(判斷特殊邏輯)
            meta: { requireAuth: true },
            children: [{
                    // 當 /home 匹配成功，預設是不會有任何子路由組件載入 Home 的 <router-view> 中
                    // 不會有任何資料被渲染在 Home 的 <router-view> 中
                    // 如果需要有預設的子路由組件顯示，可以依照以下設定將 Welcome 作為預設
                    // 在此設定 home 目的在於避免直接使用名稱路由而產生的預設失效問題(讓名稱與父路由一致)
                    path: '',
                    name: 'home',
                    component: Welcome
                },
                {
                    // 以 / 開頭的嵌套路徑會被當作根路徑。 這讓你充分的使用嵌套組件而無須設置嵌套的路徑。
                    // 如果是直接使用 path: 'welcome' 則需要在 '/home/welcome/' 才能訪問 (相對路徑)
                    // 如果是直接使用 path: '/welcome' 則需要在 '/welcome' 才能訪問 (絕對路徑)
                    path: 'welcome',
                    name: 'welcome',
                    component: Welcome
                },
                {
                    path: 'hello',
                    name: 'hello',
                    component: Hello
                },
                {
                    // 動態路由匹配
                    // ?表示optional (可以略過)
                    // 如果沒有標示就一定要給參數，不然router會無法識別導向預設位址)
                    path: 'introBranch/:branchName',
                    name: 'introBranch',
                    component: IntroBranch
                }
            ]
        },
        {
            path: '/demo',
            component: Demo,
            meta: { requireAuth: true },
            children: [{
                    path: '',
                    name: 'demo',
                    component: BasicControl
                },
                {
                    path: 'basicControl',
                    name: 'basicControl',
                    component: BasicControl
                },
                {
                    path: 'propsTester',
                    name: 'propsTester',
                    component: PropsTester
                },
                {
                    path: 'tabTester',
                    component: TabTester,
                    children: [{
                            path: '',
                            name: 'tabTester',
                            component: BasicControl

                        },
                        {
                            path: 'basicControl',
                            name: 'tab-basicControl',
                            component: BasicControl
                        },
                        {
                            path: 'propsTester',
                            name: 'tab-propsTester',
                            component: PropsTester
                        },
                        {
                            path: 'all',
                            name: 'tab-all',
                            // 在界面中擁有多個單獨命名的視圖
                            components: {
                                //default: xxxx
                                BasicControl: BasicControl,
                                PropsTester: PropsTester
                            }
                        }
                    ]
                }
            ]
        },
        {
            path: '/features',
            name: 'features',
            component: Features,
            meta: { requireAuth: true },
        },
        {
            path: '/*', //其他页面，強制跳轉到Home頁面
            redirect: '/home'
        }
    ],
    // 因 bootstrap 預設套用頁簽，正在使用的頁簽超連結 a 的 css 為 active
    // 所以可以透過此設定將 'router-link-active' 改為 'active'
    linkActiveClass: 'active'
})



// Navigation hook
router.beforeEach(async(to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) {

        let isLogin = true

        // 驗證是否已經登入 (看自己的實作機制)
        // 可能是檢查 localStorage / vuex 狀態
        console.log('check auth!!')

        if (isLogin === false && from.path !== '/login') {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next() //必須向下走
        }

    } else {
        next() // 必須向下走
    }
})



export default router;