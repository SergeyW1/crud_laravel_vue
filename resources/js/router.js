import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/people',
        name: 'person.index',
        component: () => import('./Components/Person/Index.vue')
    },
    {
        path: '/people/create',
        name: 'person.create',
        component: () => import('./Components/Person/Create.vue')
    },
    {
        path: '/people/:id',
        name: 'person.edit',
        component: () => import('./Components/Person/Edit.vue')
    },
    {
        path: '/people/:id',
        name: 'person.show',
        component: () => import('./Components/Person/Show.vue')
    },
]


const router = createRouter({
    history: createWebHistory(), // история роутеров
    routes
})

export default router
