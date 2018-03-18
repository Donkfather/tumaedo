import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

window.Bus = new Vue();
window._ = require('lodash');

import Welcome from './pages/Welcome'
import PlayerOrder from './pages/player-order'
import SelectCards from './pages/select-cards'
import FirstPlayer from './pages/first-player'
import Question from './pages/question'
import Answer from './pages/question'

Vue.component('app-layout', require('./components/App'))
Vue.component('list', require('./components/ListSimple'))
Vue.component('nav-buttons', require('./components/navButtons'))
Vue.component('v-button', require('./components/button'))

const routes = [
    {path: '/', component: Welcome},
    {path: '/player-order', component: PlayerOrder},
    {path: '/select-cards', component: SelectCards},
    {path: '/first-player', component: FirstPlayer},
    {path: '/question', component: Question},
    {path: '/answer', component: Answer},
    {path: '*', component: {template: `<h1>Not Found!</h1>`}},
]

const router = new VueRouter({
    routes,
    // mode: 'history',
})

import {mapState} from 'vuex';
import store from './Vuex';

const App = new Vue({
    el: "#app",
    template: `
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    `,
    router,
    store,
    data() {
        return {
            transitionName: 'slide-left',
        }
    },
    computed: {
        ...mapState({
            characters: ({repositories}) => repositories.characters,
            weapons: ({repositories}) => repositories.weapons,
            places: ({repositories}) => repositories.places,
            myCards: ({game}) => game.myCards,
            players: ({game}) => game.players
        }),
    },
    beforeMount() {
        let that = this;
        Bus.$on('restart', () => {
            that.restartApp();
        });
        Bus.$on('next-step', (step) => {
            that.$router.push(step);
        });
        Bus.$on('start-game', () => {
            that.startGame();
        });
        Bus.$on('question',(question) => {
            that.$store.commit('addQuestion',question)
        })
        Bus.$on('step',()=>{
            that.$store.dispatch('step');
        })
    },
    methods: {
        restartApp() {
            this.$store.dispatch('restartApp');
            this.$router.push('/player-order');
        },
        startGame() {
            if (! this.players.length) {
                this.$router.push('/player-order')
                return;
            }
            if (!_.flatten(this.myCards).length) {
                this.$router.push('/select-cards')
            }
            this.$store.dispatch('START_GAME');
            this.$router.push('/question')
        }
    }
});