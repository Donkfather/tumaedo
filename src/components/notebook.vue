<template>
    <div class="bg-mustard-lightest">
        <div class="">
            <div class="text-center py-4 mb-3">
                <h2 class="text-2xl uppercase font-boldest font-serif text-green-dark tracking-wide">Detective
                    Notes</h2>
            </div>
            <div class="text-center bg-green-dark p-3">
                <h2 class="text-xl uppercase text-bold text-mustard-lightest tracking-wide">Suspects</h2>
            </div>
            <div>
                <div class="table w-full notebook">
                    <div class="table-row w-full text-left font-bold" v-for="item in characters">
                        <div class="table-cell w-2/5 pl-3 p-2 select-none" v-text="item.name"></div>
                        <div class="table-cell text-center text-xl" v-for="item in otherPlayers">
                            <div class="flex flex-col h-full">
                                <div class="flex-1 text-scarlet flex justify-center items-center text-3xl select-none">
                                    &cross;
                                </div>
                                <div class="numbers flex justify-around w-full select-none" style="font-size: 9px;">
                                    <div>1</div>
                                    <div>2</div>
                                    <div>3</div>
                                    <div>4</div>
                                    <div>5</div>
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
                    <div class="table-row w-full text-left font-bold" v-for="item in weapons">
                        <div class="table-cell w-2/5 pl-3 p-2 select-none" v-text="item.name"></div>
                        <div class="table-cell text-center text-xl" v-for="item in otherPlayers">
                            <div class="flex flex-col h-full">
                                <div class="flex-1 text-scarlet flex justify-center items-center text-3xl select-none">
                                    &cross;
                                </div>
                                <div class="numbers flex justify-around w-full select-none" style="font-size: 9px;">
                                    <div>1</div>
                                    <div>2</div>
                                    <div>3</div>
                                    <div>4</div>
                                    <div>5</div>
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
                    <div class="table-row w-full text-left font-bold" v-for="item in places">
                        <div class="table-cell w-2/5 pl-3 p-2 select-none" v-text="item.name"></div>
                        <div class="table-cell text-center text-xl" v-for="item in otherPlayers">
                            <div class="flex flex-col h-full">
                                <div class="flex-1 text-scarlet flex justify-center items-center text-3xl select-none">
                                    &cross;
                                </div>
                                <div class="numbers flex justify-around w-full select-none" style="font-size: 9px;">
                                    <div>1</div>
                                    <div>2</div>
                                    <div>3</div>
                                    <div>4</div>
                                    <div>5</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    import {characters, weapons, places} from '../Repository'

    export default {
        name: "notebook",
        data() {
            return {
                table: [],
                players: [],
                characters,
                weapons,
                places
            }
        },
        computed: {
            ...mapState({
                otherPlayers: (({players}) => {
                    return players.splice(1)
                }),
            })
        },
        beforeMount() {
            let table = {
                suspects: [
                    {
                        name: 'Scarlet',
                        players:[
                            {
                                state: true,
                                1: true,
                                2: true,
                                3: true,
                                4: true,
                                5: true,
                            },
                            {
                                state: true,
                                1: true,
                                2: true,
                                3: true,
                                4: true,
                                5: true,
                            }
                        ]
                    }
                ]
            };
            table = {
                players: [
                    {
                        name: "Scarlet",

                    }
                ]
            }
        }
    }
</script>
