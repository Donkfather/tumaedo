<template>
    <app-layout>
        <div slot="header" class="mb-4">
            <h2 class="mb-2">Who's starting ?</h2>
            <p class="text-grey text-base">
                Tell me who is first so I can do my best.
            </p>
        </div>
        <div slot="content" class="pt-8 ">
            <list-simple class="font-bold" :items="players" :pre-selected="[firstPlayerName]"
                         @select="updateFirstPlayer"></list-simple>
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
            ...mapGetters(['players', 'firstPlayerName'])
        },
        methods: {
            nextState() {
                this.$router.push('/question')
            },
            updateFirstPlayer(player){
              this.$store.commit('updateFirstPlayer',player)
            },
            startGame(){
                Bus.$emit('start-game');
            }
        }
    }
</script>
