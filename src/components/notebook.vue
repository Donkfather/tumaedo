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
                            <box :coordinates="{item: character,player}" :box="box" @options="showOptions"/>
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
                            <box :coordinates="{item: weapon,player}" :box="box" @options="showOptions"/>
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
                            <box :coordinates="{item: place,player}" :box="box" @options="showOptions"/>
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
        blocked: false
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

            this.repository = {
                characters,
                weapons,
                places,
            };

            let that = this;
            let boxState = initialBox;
            Object.keys(this.repository).forEach(category => {
                this.repository[category].forEach(item => {
                    that.$set(that.table[category], item, {});
                    let box = Object.assign({}, boxState);
                    if (that.myCards[category].includes(item)) {
                        box.blocked = true;
                    }
                    that.otherPlayersThanMyself.forEach(player => {
                        that.$set(that.table[category][item], player, {});
                        that.table[category][item][player] = Object.assign({}, box);
                    })
                });
            })
            if (this.$store.state.table[0] && this.$store.state.gameStarted) {
                console.log('table retrieve', this.$store.state.table)
                this.table = this.$store.state.table[0];
            }
            Bus.$on('question', payload => {
                console.log('notebook question event', payload);
                that.processQuestion(payload);
            });
            this.$watch('table', () => {
                console.log('table update');
                this.$store.commit('UPDATE_TABLE', this.table);
                this.$emit('updated')
            }, {deep: true})
        },
        computed: {
            ...mapGetters(['players', 'currentPlayer', 'otherPlayersThanMyself', 'myself', 'myCards', 'flatCards']),
            perPlayerCards() {
                let players = this.otherPlayersThanMyself;
                let result = {};
                _.each(players, player => {
                    result[player] = {
                        has: [],
                        hasnt: [],
                        unknown: []
                    }
                });
                _.each(this.flatTable, (item, itemName) => {
                    _.each(item, (player, playerName) => {
                        if (player.state === true) {
                            result[playerName]['has'].push(itemName)
                        } else if(player.state === false){
                            result[playerName]['hasnt'].push(itemName)
                        } else {
                            result[playerName]['unknown'].push(itemName)
                        }
                    })
                })
                return result;
            },
            flatTable() {
                let result = {};
                _.each(this.table, (category) => {
                    _.each(category, (item, itemName) => {
                        result[itemName] = item
                    })
                })
                return result;
            }
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
                let coordinates = this.coordinates;
                let tableCategory = this.getTableCategoryFor(coordinates.item)[coordinates.item];
                if (!tableCategory) {
                    this.$modal.hide('options');
                    return;
                }
                // this.$set(category, this.coordinates.player, box)
                this.applyOption(option, tableCategory[coordinates.player]);

                if (option === 'v') {
                    this.applyTimesOptionToNeighborsOf(coordinates.player, tableCategory);
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
            getTableCategoryFor(key) {
                let table = this.table;
                let category = (Object.keys(table).filter(category => {
                    return table[category].hasOwnProperty(key)
                }));
                return table[category];
            },
            processQuestion(question) {
                let that = this;
                let askedCards = [question.character, question.weapon, question.place];
                // Case 1
                if (!question.who) {
                    // for( let key in Object.keys(this.table))
                    Object.keys(this.table).forEach(key => {
                        // key in ['characters','weapons','places]
                        let category = that.table[key];
                        Object.keys(category).forEach(item => {
                            //item in [...characters]
                            if (askedCards.indexOf(item) >= 0 && that.flatCards.indexOf(item) < 0) {
                                Object.keys(category[item]).forEach(player => {
                                    if (!player.blocked) {
                                        that.applyOption('x', category[item][player])
                                    }
                                })
                            }
                        })
                    })
                } else
                // case 2
                if (question.who !== this.myself && question.what) {
                    let category = this.getTableCategoryFor(question.what);
                    console.log(category[question.what][question.who]);
                    this.applyOption('v', category[question.what][question.who]);
                    this.applyTimesOptionToNeighborsOf(question.who, category[question.what])
                } else
                // Case 3
                if (question.who && question.who !== this.myself && _.intersection(askedCards,this.perPlayerCards[question.who].hasnt).length === 2) {
                    let magicCard = _.intersection(askedCards,this.perPlayerCards[question.who].unknown)[0];
                    let key = this.getTableCategoryFor(magicCard)[magicCard]
                    this.applyOption('v',key[question.who]);
                    this.applyTimesOptionToNeighborsOf(question.who,key)
                }
            }
        }
    }
    // 1. nu raspunde nimeni => se pune X la toate inafara de cartile mele
    // 2. eu intreb si cineva raspune si cunosc cartea => se pune bifa si x la restul de pe rand
    // 3. cineva raspunde la o intrebare si nu are 2 din 3 carti => se pune v la a 3-a
    //
</script>
