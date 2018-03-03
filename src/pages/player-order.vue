<template>
    <app-layout>
        <div slot="header">
            <h2 class="mb-2">Player order</h2>
            <p class="text-grey text-base">
                Pick your character first and then the next one in the order you play.
            </p>
        </div>
        <div slot="content">
            <div class="flex justify-around  pt-8 flex-wrap content-around flex-1 md:w-1/2 mx-auto">
                <div v-for="(character, index) in characters"
                     class="flex flex-col text-center mb-4 cursor-pointer sm:px-4"
                     @click="toggle(character)">
                    <div class="relative mb-3 overflow-hidden shadow shadow-md bg-grey-light">
                        <div class="bg-grey-darkest absolute w-full opacity-50 flex justify-center items-center"
                             style="height: 95%;"
                             v-if="selected.includes(character)">
                        <span v-if="selected.includes(character)"
                              class="text-5xl text-white"
                        >
                            {{selected.indexOf(character)+1}}
                        </span>
                        </div>
                        <img :src="character.img" alt="Item"
                             class="w-full"
                             style="max-width: 160px;">
                    </div>
                    <span class="font-bold uppercase text-sm tracking-wide">
                    {{character.name}}
                </span>
                </div>
            </div>
            <div class="p-3 text-right md:w-1/2 md:mx-auto">
                <button class="bg-peacock-light p-3 rounded border-b-2 text-peacock-lightest border-peacock-dark hover:border-transparent"
                        @click="$router.push('/select-cards')"
                >
                    Next &rarr;
                </button>
            </div>
        </div>
    </app-layout>
</template>

<script>

    class Character {
        constructor({id, name, img}) {
            this.id = id;
            this.name = name;
            this.img = (img) ? img : '/public/images/scarlet.png';
        }
    }

    export default {
        name: "player-order",
        data() {
            return {
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
                selected: [],
            }
        },
        beforeMount() {
            this.toggle(this.characters[0]);
        },
        methods: {
            toggle(item) {
                let index = this.selected.indexOf(item);
                if (index >= 0 && index === this.selected.length - 1) {
                    this.selected.splice(index, 1);
                } else if (index === -1) {
                    this.selected.push(item)
                }
            }
        }

    }
</script>