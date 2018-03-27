<template>
    <div class="bg-mustard-lightest pb-6">
        <div class="px-2">
            <div class="text-center py-4 mb-3">
                <h2 class="text-2xl uppercase font-boldest font-serif text-green-dark tracking-wide">Detective
                    Notes</h2>
            </div>
            <div class="text-center bg-green-dark p-3">
                <h2 class="text-xl uppercase text-bold text-mustard-lightest tracking-wide">Suspects</h2>
            </div>
            <div>
                <div class="table w-full notebook">
                    <div class="table-row w-full" style="height: 20px;">
                        <div class="table-cell w-2/5"></div>
                        <div class="table-cell text-center text-sm tracking-wide notebook-box" style="width:75px;"
                             v-for="player in otherPlayersThanMyself" v-text="player.substring(0,2)"></div>
                    </div>
                    <div class="table-row w-full text-left font-bold" v-for="(players,character) in table.characters">
                        <div class="table-cell pl-3 p-2 select-none " v-text="character"></div>
                        <div class="table-cell text-center text-xl relative notebook-box" style="width:75px;"
                             v-for="(box,player) in players">
                            <div class="flex flex-col h-full" @click="showOptions({character, player})">
                                <div v-show="box.state === false"
                                     class="flex-1 text-scarlet flex justify-center items-center text-3xl select-none">
                                    <i class="fa fa-times"></i>
                                </div>
                                <div v-show="box.state === true"
                                     class="flex-1 text-green flex justify-center items-center text-3xl select-none">
                                    <i class="fa fa-check"></i>
                                </div>
                                <div class="absolute pin-b w-full">

                                    <div class="numbers flex justify-around w-full select-none" style="font-size: 9px;">
                                        <div v-show="box[1]">1</div>
                                        <div v-show="box[2]">2</div>
                                        <div v-show="box[3]">3</div>
                                        <div v-show="box[4]">4</div>
                                        <div v-show="box[5]">5</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center bg-green-dark p-3">
                <h2 class="text-xl uppercase text-bold text-mustard-lightest tracking-wide">Weapons</h2>
            </div>
            <div>
                <div class="table w-full notebook">
                    <div class="table-row w-full" style="height: 20px;">
                        <div class="table-cell w-2/5"></div>
                        <div class="table-cell text-center text-sm tracking-wide notebook-box" style="width:75px;"
                             v-for="player in otherPlayersThanMyself" v-text="player.substring(0,2)"></div>
                    </div>
                    <div class="table-row w-full text-left font-bold" v-for="(players,weapon) in table.weapons">
                        <div class="table-cell w-2/5 pl-3 p-2 select-none" v-text="weapon"></div>
                        <div class="table-cell text-center text-xl relative notebook-box"
                             v-for="(box,player) in players">
                            <div class="flex flex-col h-full" @click="showOptions({weapon, player})">
                                <div v-show="box.state === false"
                                     class="flex-1 text-scarlet flex justify-center items-center text-3xl select-none">
                                    <i class="fa fa-times"></i>
                                </div>
                                <div v-show="box.state === true"
                                     class="flex-1 text-green flex justify-center items-center text-3xl select-none">
                                    <i class="fa fa-check"></i>
                                </div>
                                <div class="absolute pin-b w-full">

                                    <div class="numbers flex justify-around w-full select-none" style="font-size: 9px;">
                                        <div v-show="box[1]">1</div>
                                        <div v-show="box[2]">2</div>
                                        <div v-show="box[3]">3</div>
                                        <div v-show="box[4]">4</div>
                                        <div v-show="box[5]">5</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center bg-green-dark p-3">
                <h2 class="text-xl uppercase text-bold text-mustard-lightest tracking-wide">Places</h2>
            </div>
            <div>
                <div class="table w-full notebook">
                    <div class="table-row w-full" style="height: 20px;">
                        <div class="table-cell w-2/5"></div>
                        <div class="table-cell text-center text-sm tracking-wide notebook-box" style="width:75px;"
                             v-for="player in otherPlayersThanMyself" v-text="player.substring(0,2)"></div>
                    </div>
                    <div class="table-row w-full text-left font-bold" v-for="(players,place) in table.places">
                        <div class="table-cell w-2/5 pl-3 p-2 select-none" v-text="place"></div>
                        <div class="table-cell text-center text-xl relative notebook-box"
                             v-for="(box,player) in players">
                            <div class="flex flex-col h-full" @click="showOptions({place, player})">
                                <div v-show="box.state === false"
                                     class="flex-1 text-scarlet flex justify-center items-center text-3xl select-none">
                                    <i class="fa fa-times"></i>
                                </div>
                                <div v-show="box.state === true"
                                     class="flex-1 text-green flex justify-center items-center text-3xl select-none">
                                    <i class="fa fa-check"></i>
                                </div>
                                <div class="absolute pin-b w-full">

                                    <div class="numbers flex justify-around w-full select-none" style="font-size: 9px;">
                                        <div v-show="box[1]">1</div>
                                        <div v-show="box[2]">2</div>
                                        <div v-show="box[3]">3</div>
                                        <div v-show="box[4]">4</div>
                                        <div v-show="box[5]">5</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <modal name="options" width="200" height="75" @closed="clearSelectedBox">
            <div class="relative flex flex-col h-full">
                <div class="flex bg-teal-lightest text-1xl font-bold" style="height: 45px;">
                    <div @click="setLabel('x')"
                         class="cursor-pointer hover:bg-teal-light hover:text-white flex-1 border-r border-teal-light text-scarlet justify-center items-center flex">
                        <i class="fa fa-times"></i>
                    </div>
                    <div @click="setLabel('v')"
                         class="cursor-pointer hover:bg-teal-light hover:text-white flex-1 border-l border-teal-light text-green justify-center items-center flex">
                        <i class="fa fa-check"></i>
                    </div>
                    <div @click="setLabel('r')"
                         class="cursor-pointer hover:bg-teal-light hover:text-white flex-1 border-l border-teal-light text-green justify-center items-center flex">
                        <i class="fa fa-trash"></i>
                    </div>
                </div>
                <div class="numbers flex-1 flex justify-between items-center w-full select-none text-xl bg-teal-light">
                    <div @click="setLabel('1')"
                         class="cursor-pointer hover:bg-teal-lightest px-3 h-full flex justify-center items-center">
                        1
                    </div>
                    <div @click="setLabel('2')"
                         class="cursor-pointer hover:bg-teal-lightest px-3 h-full flex justify-center items-center">
                        2
                    </div>
                    <div @click="setLabel('3')"
                         class="cursor-pointer hover:bg-teal-lightest px-3 h-full flex justify-center items-center">
                        3
                    </div>
                    <div @click="setLabel('4')"
                         class="cursor-pointer hover:bg-teal-lightest px-3 h-full flex justify-center items-center">
                        4
                    </div>
                    <div @click="setLabel('5')"
                         class="cursor-pointer hover:bg-teal-lightest px-3 h-full flex justify-center items-center">
                        5
                    </div>
                </div>
            </div>
        </modal>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import {characters, weapons, places} from '../Repository'

    const initialBox = {
        state: -1,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
    };
    export default {
        name: "notebook",
        data() {
            return {
                table: {
                    characters: {},
                    weapons: {},
                    places: {}
                },
                coordinates: {}
            }
        },
        created() {
            this.characters = characters;
            this.weapons = weapons;
            this.places = places;
            let that = this;
            let boxState = initialBox;
            this.characters.forEach(item => {
                this.$set(that.table.characters, item, {});
                that.table.characters[item] = {};
                that.otherPlayersThanMyself.forEach(player => {
                    that.$set(that.table.characters[item], player, {});
                    that.table.characters[item][player] = Object.assign({}, boxState);
                })
            });

            this.weapons.forEach(item => {
                this.$set(that.table.weapons, item, {});
                that.table.weapons[item] = {};
                that.otherPlayersThanMyself.forEach(player => {
                    that.$set(that.table.weapons[item], player, {});
                    that.table.weapons[item][player] = Object.assign({}, boxState);
                })
            });

            this.places.forEach(item => {
                this.$set(that.table.places, item, {});
                that.table.places[item] = {};
                that.otherPlayersThanMyself.forEach(player => {
                    that.$set(that.table.places[item], player, {});
                    that.table.places[item][player] = Object.assign({}, boxState);
                })
            });
            Bus.$on('question', payload => {
                console.log('notebook question event', payload);
                console.log('notebook question after event', this.players[this.currentPlayer]);
                that.processQuestion(payload);
            });
        },
        computed: {
            ...mapGetters(['players', 'currentPlayer', 'otherPlayersThanMyself', 'myself']),
        },
        methods: {
            showOptions(coordinates) {
                this.coordinates = coordinates;
                this.$modal.show('options')
            },
            clearSelectedBox() {
                this.coordinates = {};
            },
            setLabel(option) {
                let key = this.findKey();
                if (!key) {
                    this.$modal.hide('options');
                    return;
                }
                let selectedPlayer = this.coordinates.player;

                // this.$set(key, this.coordinates.player, box)
                console.log(key[selectedPlayer]);
                this.applyOption(option, key[selectedPlayer]);
                console.log(key[selectedPlayer]);

                if (option === 'v') {
                    this.applyTimesOptionToNeighborsOf(selectedPlayer, key);
                }
                this.$modal.hide('options')
            },
            applyTimesOptionToNeighborsOf(selectedPlayer, key) {
                let neighbors = this.otherPlayersThanMyself.filter(item => item !== selectedPlayer);
                neighbors.forEach(neighbor => {
                    this.applyOption('x', this.applyOption('r', key[neighbor]))
                })
            },
            applyOption(option, box) {
                switch (option) {
                    case 'x':
                        box.state = false;
                        return box;
                    case 'v':
                        box.state = true;
                        return box;
                    case '1':
                        box[1] = !box[1];
                        return box;
                    case '2':
                        box[2] = !box[2];
                        return box;
                    case '3':
                        box[3] = !box[3];
                        return box;
                    case '4':
                        box[4] = !box[4];
                        return box;
                    case '5':
                        box[5] = !box[5];
                        return box;
                    default:
                        return Object.assign(box, initialBox);
                }
            },
            otherPlayersWithout(player) {
                return this.otherPlayersThanMyself.filter(item => item !== player)
            },
            findKey(key) {
                if (this.coordinates.hasOwnProperty('character')) {
                    return this.table.characters[this.coordinates.character];
                } else if (this.coordinates.hasOwnProperty('weapon')) {
                    return this.table.weapons[this.coordinates.weapon];
                } else if (this.coordinates.hasOwnProperty('place')) {
                    return this.table.places[this.coordinates.place];
                }
                return null;
            },
            getTableCategoryFor(key) {
                let table = this.table;
                if (table.characters.hasOwnProperty(key)) {
                    return table.characters;
                }
                if (table.weapons.hasOwnProperty(key)) {
                    return table.weapons;
                }
                if (table.places.hasOwnProperty(key)) {
                    return table.places;
                }
            },
            processQuestion(question) {
                let that = this;
                let askedCards = [question.character, question.weapon, question.place];
                // Case nobody answered
                if (!question.who) {
                    // for( let key in Object.keys(this.table))
                    Object.keys(this.table).forEach(key => {
                        // key in ['characters','weapons','places]
                        let category = that.table[key];
                        Object.keys(category).forEach(item => {
                            //item in [...characters]
                            if (askedCards.indexOf(item) >= 0) {
                                console.log(category[item]);
                                Object.keys(category[item]).forEach(player => {
                                    that.applyOption('x', category[item][player])
                                })
                            }
                            // category[player].state = false;
                        })
                    })
                } else
                // Case someone answered and you know whit what
                if (question.who !== this.myself && question.what) {
                    let category = this.getTableCategoryFor(question.what);
                    console.log(category[question.what][question.who]);
                    this.applyOption('v', category[question.what][question.who]);
                    this.applyTimesOptionToNeighborsOf(question.who, category[question.what])
                }
            }
        }
    }
</script>
