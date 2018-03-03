import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


import Welcome from './pages/Welcome'
import PlayerOrder from './pages/player-order'
import SelectCards from './pages/select-cards'

Vue.component('app-layout', require('./components/App'))

const routes = [
    {path: '/', component: Welcome},
    {path: '/player-order', component: PlayerOrder},
    {path: '/select-cards', component: SelectCards},
    {path: '*', component: {template: `<h1>Not Found!</h1>`}},
]

const router = new VueRouter({
    routes,
    // mode: 'history',
})

Vue.component('app', require('./components/App.vue'));

const App = new Vue({
    el: "#app",
    template: `
<transition name="fade" mode="out-in">
    <router-view></router-view>
</transition>
`,
    router,
    data() {
        return {
            transitionName: 'slide-left',
        }
    },
});