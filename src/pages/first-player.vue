<template>
    <app-layout>
        <div slot="header" class="mb-4">
            <h2 class="mb-2">Who's starting ?</h2>
            <p class="text-grey text-base">
                Tell me who is first so I can do my best.
            </p>
        </div>
        <div slot="content" class="pt-8 ">
            <list class="font-bold" :items="players" :pre-selected="[firstPlayer]" @update="updateFirstPlayer"></list>
        </div>
        <div slot="buttons">
            <v-button text="Start Game" @click="startGame()" ></v-button>
        </div>
    </app-layout>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';

    export default {
        name: "first-player",
        computed: {
            ...mapGetters(['players','firstPlayer'])
        },
        methods: {
            nextState() {
                this.$router.push('/question')
            },
            ...mapMutations(['updateFirstPlayer']),
            startGame(){
                Bus.$emit('start-game');
            }
        }
    }
</script>
