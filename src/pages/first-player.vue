<template>
    <app-layout>
        <div slot="header" class="mb-4">
            <h2 class="mb-2">Who's starting ?</h2>
            <p class="text-grey text-base">
                Tell me who is first so I can do my best.
            </p>
        </div>
        <div slot="content" class="pt-8 ">
            <list class="font-bold" :data="characters" :pre-selected="[firstPlayer]" @update="updateFirstPlayer"></list>
        </div>
        <div slot="buttons">
            <v-button text="Start Game" @click="startGame()"/>
        </div>
    </app-layout>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';

    export default {
        name: "first-player",
        computed: {
            ...mapState({
                characters: ({game}) => game.players,
                firstPlayer: ({game}) => game.firstPlayer,
            })
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
