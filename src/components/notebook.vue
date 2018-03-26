<template>
    <div class="bg-mustard-lightest">
        <div class="px-4">
            <div class="text-center py-4 mb-3">
                <h2 class="text-2xl uppercase font-boldest font-serif text-green-dark tracking-wide">Detective
                    Notes</h2>
            </div>
            <div class="text-center bg-green-dark p-3">
                <h2 class="text-xl uppercase text-bold text-mustard-lightest tracking-wide">Suspects</h2>
            </div>
            <div>
                <div class="table w-full notebook">
                    <div class="table-row w-full text-left font-bold" v-for="(players,character) in table.characters">
                        <div class="table-cell w-2/5 pl-3 p-2 select-none " v-text="character"></div>
                        <div class="table-cell text-center text-xl relative" v-for="(box,player) in players">
                            <div class="flex flex-col h-full" @click="showOptions">
                                <div v-show="box.state === false" class="flex-1 text-scarlet flex justify-center items-center text-3xl select-none">
                                    &cross;
                                </div>
                                <div v-show="box.state === true" class="flex-1 text-green flex justify-center items-center text-3xl select-none">
                                    &check;
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
                    <div class="table-row w-full text-left font-bold" v-for="(players,weapon) in table.weapons">
                        <div class="table-cell w-2/5 pl-3 p-2 select-none" v-text="weapon"></div>
                        <div class="table-cell text-center text-xl relative" v-for="(box,player) in players">
                            <div class="flex flex-col h-full">
                                <div v-show="box.state === false" class="flex-1 text-scarlet flex justify-center items-center text-3xl select-none">
                                    &cross;
                                </div>
                                <div v-show="box.state === true" class="flex-1 text-green flex justify-center items-center text-3xl select-none">
                                    &check;
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
                    <div class="table-row w-full text-left font-bold" v-for="(players,place) in table.places">
                        <div class="table-cell w-2/5 pl-3 p-2 select-none" v-text="place"></div>
                        <div class="table-cell text-center text-xl relative" v-for="(box,player) in players">
                            <div class="flex flex-col h-full">
                                <div v-show="box.state === false" class="flex-1 text-scarlet flex justify-center items-center text-3xl select-none">
                                    &cross;
                                </div>
                                <div v-show="box.state === true" class="flex-1 text-green flex justify-center items-center text-3xl select-none">
                                    &check;
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
        <modal name="options" width="200" height="75">
            <div class="relative flex flex-col h-full">
                <div class="flex bg-teal-lightest text-3xl font-bold" style="height: 45px;">
                    <div class="cursor-pointer hover:bg-teal-light hover:text-white flex-1 border-r border-teal-light text-scarlet justify-center items-center flex">
                        &cross;
                    </div>
                    <div class="cursor-pointer hover:bg-teal-light hover:text-white flex-1 border-l border-teal-light text-green justify-center items-center flex">
                        &check;
                    </div>
                </div>
                <div class="numbers flex-1 flex justify-between items-center w-full select-none text-xl bg-teal-light">
                    <div class="cursor-pointer hover:bg-teal-lightest px-3 h-full flex justify-center items-center">1</div>
                    <div class="cursor-pointer hover:bg-teal-lightest bg-teal px-3 h-full flex justify-center items-center">2</div>
                    <div class="cursor-pointer hover:bg-teal-lightest px-3 h-full flex justify-center items-center">3</div>
                    <div class="cursor-pointer hover:bg-teal-lightest px-3 h-full flex justify-center items-center">4</div>
                    <div class="cursor-pointer hover:bg-teal-lightest px-3 h-full flex justify-center items-center">5</div>
                </div>
            </div>
        </modal>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import {characters, weapons, places} from '../Repository'

    export default {
        name: "notebook",
        data() {
            return {
                table: {
                    characters: {},
                    weapons: {},
                    places: {}
                },
            }
        },
        created(){
          this.characters = characters;
          this.weapons = weapons;
          this.places = places;
          let that = this;
          let boxState = {
              state:-1,
              1:false,
              2:false,
              3:false,
              4:false,
              5:false,
          }
            this.characters.forEach(item => {
                let row = that.table.characters[item] = {};
                that.otherPlayersThanMyself.forEach( player => {
                    row[player] = boxState
                })
            })

            this.weapons.forEach(item => {
                let row = that.table.weapons[item] = {};
                that.otherPlayersThanMyself.forEach( player => {
                    row[player] = boxState
                })
            })

            this.places.forEach(item => {
                let row = that.table.places[item] = {};
                that.otherPlayersThanMyself.forEach( player => {
                    row[player] = boxState
                })
            })
        },
        mounted(){
            this.$modal.show('options')
        },
        computed: {
            ...mapGetters(['otherPlayersThanMyself','players','otherPlayersThanMyself']),
        },
        methods: {
            showOptions(){
                this.$modal.show('options')
            }
        }
    }
</script>
