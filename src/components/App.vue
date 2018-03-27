<template>
    <div class="md:container md:m-auto flex flex-col h-full">
        <nav class="bg-peacock-lighter text-center py-4 font-sans fixed pin-t w-full sticky top z-20">
            <div class="flex md:w-1/2 mx-auto">
                <div class="pl-4 w-1/5 text-xl">
                    <i class="fa fa-repeat" @click="restartApp"></i>
                </div>
                <div class="w-3/5">
                    <h1 class="uppercase text-lg">
                        {{title}}
                    </h1>
                </div>
                <div class="w-1/5 text-xl">
                    <template v-if="$store.state.gameStarted">
                        <span @click="toggleNotebook()">
                        <i class="fa fa-sticky-note" v-show="!displayNotebook"></i>
                        <i class="fa fa-times" v-show="displayNotebook"></i>
                        </span>
                    </template>
                </div>
            </div>
        </nav>

        <div class="wrapper relative"  style="padding-top: 55px; padding-bottom: 20px;">
            <notebook class="absolute top left z-10 w-full" v-show="displayNotebook" />

            <div class="md:w-1/2 md:mx-auto text-center text-sm mt-4 px-2">
                <slot name="header"/>
            </div>
            <div class="md:w-1/2 md:mx-auto px-2">
                <slot name="content"/>
            </div>
        </div>
        <div class="p-3 text-right md:w-1/2 md:mx-auto px-2">
            <slot name="buttons" />
        </div>
    </div>
</template>

<script>
    import Notebook from './notebook'

    export default {
        name: 'app-layout',
        props: ['customTitle'],
        components: {Notebook},
        data() {
            return {
                title: 'Cluedo Notebook',
                displayNotebook: false
            }
        },
        beforeMount() {
            this.title = (this.customTitle) ? this.customTitle : this.title;
        },
        methods: {
            nextState() {
                Bus.$emit('next-step');
            },
            restartApp() {
                Bus.$emit('restart');
            },
            toggleNotebook() {
                this.displayNotebook = !this.displayNotebook && this.$store.state.gameStarted;
            }
        }
    }
</script>
