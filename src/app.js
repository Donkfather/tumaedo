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
import Notebook from './components/notebook'
import {mapState} from 'vuex';
import store from './Vuex';

Vue.component('app-layout', require('./components/App'))
Vue.component('list', require('./components/ListSimple'))
Vue.component('nav-buttons', require('./components/navButtons'))
Vue.component('v-button', require('./components/button'))

const routes = [
    {path: '/', component: Welcome},
    {path: '/player-order', component: PlayerOrder, name: 'player-order'},
    {path: '/select-cards', component: SelectCards, name: 'select-cards'},
    {path: '/first-player', component: FirstPlayer, name: 'first-player'},
    {path: '/question',component: Question, name: 'question'},
    {path: '/notebook',component: Notebook, name: 'notebook'},
    {path: '*', component: {template: `<h1>Not Found!</h1>`}},
];

const router = new VueRouter({
    routes,
    // mode: 'history',
})
router.beforeEach((to, from, next) => {
    console.log(to,from);
    console.log(store.state);
    if(to.name === 'select-cards' && !store.state.game.players.length > 0){
        next('player-order');
    }
    next()
})

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