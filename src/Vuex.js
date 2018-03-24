import Character from './models/Character';
import Weapon from './models/Weapon';
import Place from './models/Place';
import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    asyncStorage: false
})
Vue.use(Vuex)
const initialState = {
    game: {
        players: [],
        myCards: {
            characters: [],
            weapons: [],
            places: []
        },
        firstPlayer: [],
        currentPlayer: 0,
        questions: []
    },
    gameStarted: false,
    repositories: {
        characters: [
            {
                id: 1,
                name: "Scarlet",
            },
            {
                id: 2,
                name: "Peacock",
            },
            {
                id: 3,
                name: "Mustard",
            },
            {
                id: 4,
                name: "Plum",
            },
            {
                id: 5,
                name: "White",
            },
            {
                id: 6,
                name: "Green",
            },
        ],
        weapons: [
            {
                id: 1,
                name: "Dumbell",
            },
            {
                id: 2,
                name: "Pistol",
            },
            {
                id: 3,
                name: "Poison",
            },
            {
                id: 4,
                name: "Rope",
            },
            {
                id: 5,
                name: "Candlestick",
            },
            {
                id: 6,
                name: "Knife",
            },
            {
                id: 7,
                name: "Wrench",
            },
        ],
        places: [
            {
                id: 1,
                name: "Living Room",
            },
            {
                id: 2,
                name: "Guest House",
            },
            {
                id: 3,
                name: "Hall",
            },
            {
                id: 4,
                name: "Patio",
            },
            {
                id: 5,
                name: "Theater",
            },
            {
                id: 6,
                name: "Observatory",
            },
            {
                id: 7,
                name: "Spa",
            },
            {
                id: 8,
                name: "Kitchen",
            },
        ],
    },
};
const state = Object.assign({}, initialState);
const mutations = {
    updatePlayers({game}, data) {
        console.log(data)
        game.players = data;
    },
    updateMyCardsCharacters({game}, data) {
        game.myCards.characters = data;
    },
    updateMyCardsWeapons({game}, data) {
        game.myCards.weapons = data;
    },
    updateMyCardsPlaces({game}, data) {
        game.myCards.places = data;
    },
    updateFirstPlayer({game}, player) {
        game.firstPlayer = player[0];
        game.currentPlayer = game.players.indexOf(player[0]);
    },
    nextPlayer({game}) {
        return (game.currentPlayer + 1 >= game.players.length) ?
            game.currentPlayer = 0
            :
            game.currentPlayer += 1;
    },
    restartApp(state) {
        console.log('restarting app...');

        state.game.players = [];
        state.game.myCards = {
            characters: [],
            weapons: [],
            places: [],
        };
        state.game.firstPlayer = null;
        state.game.currentPlayer = null;
        state.game.questions = [];
        state.gameStarted = false;

        console.log('app restarted');
    },
    startGame(state) {
        state.gameStarted = true;
    },
    addQuestion({game}, question) {
        if(question.character && question.weapon && question.place){
            game.questions.push(question);
        }
    },
};
const actions = {
    restartApp({commit}) {
        window.localStorage.clear('vuex');
        commit('restartApp');
    },
    step({commit}) {
        commit('nextPlayer');
    },
    START_GAME({commit}){
        commit('startGame');
    }
};
const getters = {
    getCurrentPlayer: ({game}) => {
        return game.players[game.currentPlayer] || {};
    },
    getFlatCards: ({game}) => {
        return _.flatMap(game.myCards)
    },
};


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    // plugins: [vuexLocal.plugin]
})
