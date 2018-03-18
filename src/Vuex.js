import Character from './models/Character';
import Weapon from './models/Weapon';
import Place from './models/Place';
import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
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
            new Character({
                id: 1,
                name: "Scarlet",
            }),
            new Character({
                id: 2,
                name: "Peacock",
            }),
            new Character({
                id: 3,
                name: "Mustard",
            }),
            new Character({
                id: 4,
                name: "Plum",
            }),
            new Character({
                id: 5,
                name: "White",
            }),
            new Character({
                id: 6,
                name: "Green",
            }),
        ],
        weapons: [
            new Weapon({
                id: 1,
                name: "Dumbell",
            }),
            new Weapon({
                id: 2,
                name: "Pistol",
            }),
            new Weapon({
                id: 3,
                name: "Poison",
            }),
            new Weapon({
                id: 4,
                name: "Rope",
            }),
            new Weapon({
                id: 5,
                name: "Candlestick",
            }),
            new Weapon({
                id: 6,
                name: "Knife",
            }),
            new Weapon({
                id: 7,
                name: "Wrench",
            }),
        ],
        places: [
            new Place({
                id: 1,
                name: "Living Room",
            }),
            new Place({
                id: 2,
                name: "Guest House",
            }),
            new Place({
                id: 3,
                name: "Hall",
            }),
            new Place({
                id: 4,
                name: "Patio",
            }),
            new Place({
                id: 5,
                name: "Theater",
            }),
            new Place({
                id: 6,
                name: "Observatory",
            }),
            new Place({
                id: 7,
                name: "Spa",
            }),
            new Place({
                id: 8,
                name: "Kitchen",
            }),
        ],
    },
};
const state = Object.assign({}, initialState);
const mutations = {
    updatePlayers({game}, data) {
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
        /*
        state.game = {
            players: [],
            myCards: {
                characters: [],
                weapons: [],
                places: [],
            },
            firstPlayer: null,
            currentPlayer: null,
            questions: []
        };
        gameStarted = false;
        */
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
