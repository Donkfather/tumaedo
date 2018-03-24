<template>
    <app-layout>
        <div slot="header">
            <h2 class="mb-2">Select Cards</h2>
            <p class="text-grey-dark text-base">
                Select all the cards you have in your hand or any that ar available for everybody
            </p>
        </div>
        <div slot="content" class="pt-8">
            <div class="characters mb-4">
                <div class="mb-2">
                    <h3 class="text-2xl text-grey">Characters</h3>
                </div>
                <list class="font-bold" :items="characters" multiple :numbered-select="false" :pre-selected="myCards.characters" @update="updateMyCardsCharacters"></list>
            </div>
            <div class="weapons mb-4">
                <div class="mb-2">
                    <h3 class="text-2xl text-grey">Weapons</h3>
                </div>
                <list class="font-bold" :items="weapons" multiple :numbered-select="false" :pre-selected="myCards.weapons" @update="updateMyCardsWeapons"></list>
            </div>
            <div class="places mb-4">
                <div class="mb-2">
                    <h3 class="text-2xl text-grey">Places</h3>
                </div>
                <list class="font-bold" :items="places" multiple :numbered-select="false" :pre-selected="myCards.places" @update="updateMyCardsPlaces"></list>
            </div>
        </div>
        <div slot="buttons">
            <nav-buttons next-route="/first-player"/>
        </div>
    </app-layout>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    import {characters, weapons, places} from '../Repository'

    export default {
        name: "choose-cards",
        data(){
            return {
                characters,
                weapons,
                places,
            }
        },
        computed: {
            ...mapState({ myCards: ({myCards}) => myCards})
        },
        beforeCreate(){
            if(!this.$store.state.players.length > 0){
                this.$router.push('player-order');
            }
        },
        methods: {
            ...mapMutations([
                'updateMyCardsCharacters',
                'updateMyCardsWeapons',
                'updateMyCardsPlaces'
            ])
        },
    }
</script>
