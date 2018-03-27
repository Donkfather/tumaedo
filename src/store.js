import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

let storage = window.sessionStorage;

const vuexLocal = new VuexPersistence({
    storage,
});

const initialState = {
    players: [],
    myCards: {
        characters: [],
        weapons: [],
        places: []
    },
    firstPlayer: 0,
    currentPlayer: 0,
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
    updateFirstPlayer(state, player) {
        let index = state.players.indexOf(player);
        state.firstPlayer = index;
        state.currentPlayer = index;
    },
    nextPlayer(state) {
        (state.currentPlayer + 1 >= state.players.length) ?
            state.currentPlayer = 0
            :
            state.currentPlayer += 1;
    },
    RESET_STATE(state) {
        console.log(state);
        state.players = [];
        state.myCards = {
            characters: [],
            weapons: [],
            places: [],
        };
        state.firstPlayer = 0;
        state.currentPlayer = 0;
        state.questions = [];
        state.gameStarted = false;
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
    step({commit}) {
        commit('nextPlayer');
    },
    START_GAME({commit}) {
        commit('startGame');
    },
    RESTART_APP({commit}) {
        console.log('restarting app...');
        commit('RESET_STATE');
        console.log('app restarted');
    },
};
const getters = {
    players: state => {
        return state.players
    },
    myself: state => state.players[0],
    firstPlayer: state => state.firstPlayer,
    firstPlayerName: state => state.players[state.firstPlayer],
    currentPlayer:({currentPlayer}) => {
        return currentPlayer;
    },
    currentPlayerName:({players, currentPlayer}) => {
        return players[currentPlayer] || "";
    },
    flatCards: ({myCards}) => {
        return _.flatMap(myCards)
    },
    myCards: state => state.myCards,
    otherPlayersThanMyself: state => {
        return state.players.filter((item,index)=>{
            return index > 0;
        })
    },
    otherPlayersThanCurrent: state => {
        return state.players.filter((item,index)=>{
            return index !== state.currentPlayer
        });
    }
};


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    plugins: [vuexLocal.plugin]
})
