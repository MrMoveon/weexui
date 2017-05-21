import Router from 'vue-router'
import header from "../page/header.vue"
import cell from "../page/cell.vue"
import example from "../page/example-list.vue"


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/example',
            name:'example',
            component: example
        },
        {
            path: '/header',
            name:'header',
            component: header
        },
        {
            path: '/cell',
            name:'cell',
            component: cell
        },
        {
            path: '/',
            redirect: '/example'
        }
        
    ]
})