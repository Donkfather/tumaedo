<template>
    <app-layout>
        <div slot="header" class="mb-4">
            <h2 class="mb-2">QUESTION</h2>
            <p class="text-grey text-base">
            </p>
        </div>

        <div slot="content">
            <div class="text-2xl mb-6">
                About what did {{currentPlayerName}} asked ?
            </div>
            <div class="justify-between flex flex-col sm:flex-row mb-6 -mx-2">
                <div class="relative md:w-1/3 sm:w-full px-2 mb-4 sm:mb-0">
                    <select name="character" id="character" v-model="question.character"
                            class="select"
                    >
                        <option
                                value=""
                                disabled
                                class="py-6"
                        >
                            Suspect
                        </option>
                        <option
                                :value="character"
                                v-for="character in characters"
                        >
                            {{character}}
                        </option>
                    </select>
                    <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 mr-3 text-grey-lightest">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </div>
                </div>
                <div class="relative md:w-1/3 sm:w-full px-2  mb-4 sm:mb-0">
                    <select name="weapon" id="weapon" v-model="question.weapon"
                            class="select"
                    >
                        <option
                                value=""
                                disabled
                                class="py-6"
                        >
                            Weapon
                        </option>
                        <option
                                :value="weapon"
                                v-for="weapon in weapons"
                        >
                            {{weapon}}
                        </option>
                    </select>
                    <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 mr-3 text-grey-lightest">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </div>
                </div>
                <div class="relative md:w-1/3 sm:w-full px-2  mb-4 sm:mb-0">
                    <select name="place" id="place" v-model="question.place"
                            class="select"
                    >
                        <option
                                value=""
                                disabled
                                class="py-6"
                        >
                            Place
                        </option>
                        <option
                                :value="place"
                                v-for="place in places"
                        >
                            {{place}}
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
                            class="select"
                    >

                        <option
                                value=""
                                class="py-6"
                        >
                            Character
                        </option>
                        <option
                                :value="player"
                                class="py-6"
                                v-for="(player,index) in otherPlayersThanCurrent"
                                :key="index"
                        >
                            {{player}}
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
                            class="select"
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
                                v-for="item in answerCards"
                        >
                            {{item}}
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
    import {mapGetters} from 'vuex';
    import {characters, weapons, places} from "../Repository";

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
        beforeCreate() {
            this.characters = characters;
            this.weapons = weapons;
            this.places = places;
            if (!this.$store.state.gameStarted) {
                Bus.$emit('restart');
            }
        },
        computed: {
            answerCards() {
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
            currentPlayerName() {
                return this.players[this.currentPlayer]
            },
            ...mapGetters(['currentPlayer', 'flatCards','players','questions','myCards','otherPlayersThanCurrent']),

        },
        methods: {
            nextQuestion() {
                Bus.$emit('question', this.question);
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
