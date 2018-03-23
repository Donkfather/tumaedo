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
                    <div class="table-row w-full text-left font-bold" v-for="player in players">
                        <div class="table-cell w-2/5 pl-3 p-2 select-none" v-text="player.name"></div>
                        <div class="table-cell text-center text-xl">
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
                        <div class="table-cell text-center text-xl">
                            <div class="flex flex-col h-full">
                                <div class="text-green flex-1 flex justify-center items-center text-3xl">
                                    &check;
                                </div>
                                <div class="flex text-xs w-full" style="font-size: 9px;">
                                    <div class="flex-1">1</div>
                                    <div class="flex-1">2</div>
                                    <div class="flex-1">3</div>
                                    <div class="flex-1">4</div>
                                    <div class="flex-1">5</div>
                                </div>
                            </div>
                        </div>
                        <div class="table-cell text-center text-xl">
                            <div class="flex flex-col h-full">
                                <div class="flex-1 text-scarlet flex justify-center items-center text-3xl">
                                    &cross;
                                </div>
                                <div class="flex text-xs w-full" style="font-size: 9px;">
                                    <div class="flex-1">1</div>
                                    <div class="flex-1">2</div>
                                    <div class="flex-1">3</div>
                                    <div class="flex-1">4</div>
                                    <div class="flex-1">5</div>
                                </div>
                            </div>
                        </div>
                        <div class="table-cell text-center text-xl">
                            <div class="flex flex-col h-full">
                                <div class="text-green flex-1 flex justify-center items-center text-3xl">
                                    &check;
                                </div>
                                <div class="flex text-xs w-full" style="font-size: 9px;">
                                    <div class="flex-1">1</div>
                                    <div class="flex-1">2</div>
                                    <div class="flex-1">3</div>
                                    <div class="flex-1">4</div>
                                    <div class="flex-1">5</div>
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
    export default {
        name: "notebook",
        data() {
            return {
                players: []
            }
        },
        beforeMount(){
          this.players.push(...this.$store.state.repositories.characters);
          this.players.push(...this.$store.state.repositories.weapons);
          this.players.push(...this.$store.state.repositories.places);
        }
    }
</script>
