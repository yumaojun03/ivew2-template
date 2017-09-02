import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/about',
            component: resolve => require(['../components/common/index.vue'], resolve),
            children: [{
                    path: '',
                    component: resolve => require(['../components/common/about.vue'], resolve),
                    name: "about"
                },
                {
                    path: '/form',
                    component: resolve => require(['../components/page/form.vue'], resolve),
                    name: "form"
                },
                {
                    path: '/table',
                    component: resolve => require(['../components/page/table.vue'], resolve),
                    name: "table"
                },
                {
                    path: '/markdown-viewer',
                    component: resolve => require(['../components/page/markdown-viewer.vue'], resolve),
                    name: "markdown"
                },
                {
                    path: '/markdown-editor-1',
                    component: resolve => require(['../components/page/markdown-editor-1.vue'], resolve),
                    name: "markdown1"
                },
                {
                    path: '/markdown-editor-2',
                    component: resolve => require(['../components/page/markdown-editor-2.vue'], resolve),
                    name: "markdown2"
                },
                {
                    path: '/rtf',
                    component: resolve => require(['../components/page/rtf.vue'], resolve),
                    name: "rtf"
                },{
                    path: '/upload',
                    component: resolve => require(['../components/page/upload.vue'], resolve),
                    name: "upload"
                },{
                    path: '/echarts',
                    component: resolve => require(['../components/page/echarts.vue'], resolve),
                    name: "echarts"
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/common/login.vue'], resolve),
            children: [{
                    path: '',
                    component: resolve => require(['../components/page/login-login.vue'], resolve),
                },
                {
                    path: '/register',
                    component: resolve => require(['../components/page/login-register.vue'], resolve),
                },
                {
                    path: '/foget',
                    component: resolve => require(['../components/page/login-foget.vue'], resolve),
                },
                {
                    path: '/security-question',
                    component: resolve => require(['../components/page/security-question.vue'], resolve),
                }
            ]
        },
    ]
})
