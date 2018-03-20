<template>
    <app-layout>
        <div slot="header" class="mb-4">
            <h2 class="mb-2">QUESTION</h2>
            <p class="text-grey text-base">
            </p>
        </div>

        <div slot="content">
            About what did {{getCurrentPlayer().name}} asked ?

            <div class="flex justify-between mb-6 -mx-2">
                <div class="relative flex-1 px-2">
                    <select name="character" id="character" v-model="question.character"
                            class="block text-grey-lightest appearance-none w-full bg-grey-dark border border-grey-darker text-grey-darker py-3 px-4 pr-8 rounded"
                    >
                        <option
                                value=""
                                class="py-6"
                        >
                            --
                        </option>
                        <option
                                :value="character"
                                class="py-6"
                                v-for="character in characters"
                        >
                            {{character.name}}
                        </option>
                    </select>
                    <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 mr-3 text-grey-lightest">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </div>
                </div>
                <div class="relative flex-1 px-2">
                    <select name="weapon" id="weapon" v-model="question.weapon"
                            class="block text-grey-lightest appearance-none w-full bg-grey-dark border border-grey-darker text-grey-darker py-3 px-4 pr-8 rounded"
                    >
                        <option
                                value=""
                                class="py-6"
                        >
                            --
                        </option>
                        <option
                                :value="weapon"
                                class="py-6"
                                v-for="weapon in weapons"
                        >
                            {{weapon.name}}
                        </option>
                    </select>
                    <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 mr-3 text-grey-lightest">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </div>
                </div>
                <div class="relative flex-1 px-2">
                    <select name="place" id="place" v-model="question.place"
                            class="block text-grey-lightest appearance-none w-full bg-grey-dark border border-grey-darker text-grey-darker py-3 px-4 pr-8 rounded"
                    >
                        <option
                                value=""
                                class="py-6"
                        >
                            --
                        </option>
                        <option
                                :value="place"
                                class="py-6"
                                v-for="place in places"
                        >
                            {{place.name}}
                        </option>
                    </select>
                    <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 mr-3 text-grey-lightest">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="mb-6" v-show="question.character && question.weapon && question.place">
                And who answered?
                <div class="relative">
                    <select name="answered-who" id="answered-who" v-model="question.who"
                            class="block text-grey-lightest appearance-none w-full bg-grey-darker border border-grey-darker text-grey-darker py-3 px-4 pr-8 rounded"
                    >

                        <option
                                value=""
                                class="py-6"
                        >
                            --
                        </option>
                        <option
                                :value="player"
                                class="py-6"
                                v-for="(player,index) in players"
                                :key="index"
                        >
                            {{player.name}}
                        </option>
                    </select>
                    <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 mr-3 text-grey-lightest">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="mb-6" v-show="question.who">
                With what ?
                <div class="relative">
                    <select name="character" id="answered-card" v-model="question.what"
                            class="block text-grey-lightest appearance-none w-full bg-grey-darker border border-grey-darker text-grey-darker py-3 px-4 pr-8 rounded"
                    >
                        <option
                                value=""
                                class="py-6"
                        >
                            --
                        </option>
                        <option
                                :value="item"
                                class="py-6"
                                v-for="item in questionCards"
                        >
                            {{item.name}}
                        </option>
                    </select>
                    <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 mr-3 text-grey-lightest">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="w-full">
                <button class="w-full btn btn-peacock" @click="nextQuestion()">Next</button>
            </div>
        </div>
    </app-layout>
</template>

<script>
    import {mapState, mapGetters} from 'vuex';

    export default {
        name: "question",
        data() {
            return {
                question: {
                    character: '',
                    weapon: '',
                    place: '',
                    who: '',
                    what: '',
                }
            }
        },
        beforeCreate(){
          if(! this.$store.state.gameStarted){
              Bus.$emit('restart');
          }
        },
        computed: {
            questionCards() {
                const cards = [];
                if (this.question.character) {
                    cards.push(this.question.character);
                }
                if (this.question.weapon) {
                    cards.push(this.question.weapon);
                }
                if (this.question.place) {
                    cards.push(this.question.place);
                }

                return cards;
            },
            ...mapState({
                    currentPlayer: ({game}) => game.currentPlayer,
                    players: ({game}) => game.players,
                    myCards: ({game}) => game.myCards,
                    questions: ({game}) => game.questions,
                    characters: ({repositories}) => repositories.characters,
                    weapons: ({repositories}) => repositories.weapons,
                    places: ({repositories}) => repositories.places,
                }),
        },
        methods: {
            ...mapGetters(['getCurrentPlayer', 'getFlatCards']),
            nextQuestion() {
                Bus.$emit('question',this.question);
                Bus.$emit('step');

                this.question = {
                    character: '',
                    weapon: '',
                    place: '',
                    who: '',
                    what: '',
                };
            }
        }
    }
</script>
