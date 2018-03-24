<template>
    <app-layout>
        <div slot="header" class="mb-4">
            <h2 class="mb-2">Player order</h2>
            <p class="text-grey-dark text-base">
                Pick your character first and then the next one in the order you play.
            </p>
        </div>
        <div slot="content">
            <list :items="characters"
                  :pre-selected="selected"
                  multiple
                  @update="updatePlayers"></list>
        </div>
        <div slot="buttons">
            <nav-buttons next-route="/select-cards"/>
        </div>
    </app-layout>
</template>

<script>

    import {mapGetters, mapMutations} from 'vuex';
    import {characters} from '../Repository';

    export default {
        name: "player-order",
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters({
                selected: 'players',
            }),
            characters(){
                return characters
            }
        },
        methods: {
            updatePlayers(data) {
                console.log(JSON.stringify(data));
                this.$store.commit('updatePlayers',data)
            },
            ...mapMutations(['ADD_PLAYER','REMOVE_PLAYER']),
        }

    }
</script>