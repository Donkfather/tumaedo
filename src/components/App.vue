<template>
    <div class="md:container md:m-auto flex flex-col">
        <div class="bg-peacock-lighter text-center py-4 font-sans mb-4">
            <h1 class="uppercase text-lg">
                {{title}}
            </h1>
        </div>
        <div class="text-center text-sm px-4">
            <h1 class="mb-2">Player order</h1>
            <p class="text-grey text-base">
                Pick your character first and then the next one in the order you play.
            </p>
        </div>
        <div class="flex justify-around  pt-8 flex-wrap content-around flex-1 md:w-1/2 mx-auto">
            <div v-for="(item,index) in characters" class="flex flex-col text-center mb-4 cursor-pointer sm:px-4">
                <img :src="item.img" alt="Item"
                     class="mb-3 rounded-full shadow shadow-md ">
                <span class="font-bold uppercase text-sm tracking-wide">
                    {{item.name}}
                </span>
            </div>
        </div>
        <div class="p-3 text-right md:w-1/2 md:mx-auto">
            <button class="bg-peacock p-3 rounded border-b-2 border-peacock-dark hover:border-transparent">
                Next &rarr;
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app",
        data() {
            return {
                title: 'Cluedo notebook',
                characters: [
                    {
                        id: 1,
                        name: "Scarlet",
                        img: "https://lorempixel.com/160/100/people"
                    },
                    {
                        id: 2,
                        name: "Peacock",
                        img: "https://lorempixel.com/160/100/people"
                    },
                    {
                        id: 3,
                        name: "Mustard",
                        img: "https://lorempixel.com/160/100/people"
                    },
                    {
                        id: 4,
                        name: "Plum",
                        img: "https://lorempixel.com/160/100/people"
                    },
                    {
                        id: 5,
                        name: "White",
                        img: "https://lorempixel.com/160/100/people"
                    },
                    {
                        id: 6,
                        name: "Green",
                        img: "https://lorempixel.com/160/100/people"
                    },
                ],
                selected: [],
            }
        },
    }
</script>

<style scoped>

</style>