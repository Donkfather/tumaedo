<template>
    <app-layout>
        <div slot="header" class="mb-4">
            <h2 class="mb-2">Player order</h2>
            <p class="text-grey-dark text-base">
                Pick your character first and then the next one in the order you play.
            </p>
        </div>
        <div slot="content">
            <list :data="characters" :pre-selected="selected" multiple @update="updatePlayers(selected)"></list>
        </div>
        <div slot="buttons">
            <nav-buttons next-route="/select-cards"/>
        </div>
    </app-layout>
</template>

<script>

    import { mapState, mapMutations } from 'vuex';

    export default {
        name: "player-order",
        computed: {
            ...mapState({
                characters: ({repositories}) => repositories.characters,
                selected: ({game}) => game.players,
            }),
        },
        methods: {
            ...mapMutations(['updatePlayers'])
        }

    }
</script>