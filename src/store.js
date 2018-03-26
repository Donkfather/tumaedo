import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
})
Vue.use(Vuex)
const initialState = {
    players: [],
    myCards: {
        characters: [],
        weapons: [],
        places: []
    },
    firstPlayer: null,
    currentPlayer: null,
    questions: [],
    gameStarted: false,
};

const state = Object.assign({}, initialState);

const mutations = {
    updatePlayers(state, data) {
        state.players = [...data];
    },
    ADD_PLAYER(state, item) {
        state.players.push(item);
    },
    REMOVE_PLAYER({players}, item) {
        if (players.indexOf(item) >= 0) {
            players.splice(players.indexOf(item), 1)
        }
    },
    updateMyCardsCharacters(state, data) {
        state.myCards.characters = [...data];
    },
    updateMyCardsWeapons(state, data) {
        state.myCards.weapons = [...data];
    },
    updateMyCardsPlaces(state, data) {
        state.myCards.places = [...data];
    },
    updateFirstPlayer({firstPlayer, currentPlayer, players}, player) {
        let index = players.indexOf(player)
        firstPlayer = player;
        currentPlayer = index;
        console.log(firstPlayer,currentPlayer);
    },
    nextPlayer({currentPlayer, players}) {
        return (currentPlayer + 1 >= players.length) ?
            currentPlayer = 0
            :
            currentPlayer += 1;
    },
    restartApp(state) {
        console.log('restarting app...');

        state.players = [];
        state.myCards = {
            characters: [],
            weapons: [],
            places: [],
        };
        state.firstPlayer = null;
        state.currentPlayer = null;
        state.questions = [];
        state.gameStarted = false;

        console.log('app restarted');
    },
    startGame(state) {
        state.gameStarted = true;
    },
    addQuestion({questions}, question) {
        if (question.character && question.weapon && question.place) {
            questions.push(question);
        }
    },
};
const actions = {
    updatePlayers({commit}, players) {
        commit('updatePlayers', players)
    },
    restartApp({commit}) {
        window.localStorage.clear('vuex');
        commit('restartApp');
    },
    step({commit}) {
        commit('nextPlayer');
    },
    START_GAME({commit}) {
        commit('startGame');
    }
};
const getters = {
    players: state => {
        return state.players
    },
    firstPlayer: state => state.firstPlayer,
    getCurrentPlayer:({players, currentPlayer}) => {
        return players[currentPlayer] || {};
    },
    flatCards: ({myCards}) => {
        return _.flatMap(myCards)
    },
    myCards: state => state.myCards,
    otherPlayers: state => {
        return state.players.filter((item,index)=>{
            return index > 0;
        })
    }
};


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    plugins: [vuexLocal.plugin]
})
