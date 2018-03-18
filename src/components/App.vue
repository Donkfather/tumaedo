<template>
    <div class="md:container md:m-auto flex flex-col h-full">
        <nav class="bg-peacock-lighter text-center py-4 font-sans fixed pin-t w-full z-10">
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
                    <i class="fa fa-sticky-note" @click="openNotebook"></i>
                </div>
            </div>
        </nav>
        <div class="wrapper px-4"  style="padding-top: 55px; padding-bottom: 20px;">
            <div class="md:w-1/2 md:mx-auto text-center text-sm mt-4">
                <slot name="header"/>
            </div>
            <div class="md:w-1/2 md:mx-auto">
                <slot name="content"/>
            </div>
        </div>
        <div class="p-3 text-right md:w-1/2 md:mx-auto">
            <slot name="buttons" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app-layout',
        props: ['customTitle'],
        data() {
            return {
                title: 'Cluedo Notebook'
            }
        },
        beforeMount() {
            this.title = (this.customTitle) ? this.customTitle : this.title;
        },
        methods: {
            nextState: () => {
                Bus.$emit('next-step');
            },
            restartApp: () => {
                Bus.$emit('restart');
            },
            openNotebook: () => {

            }
        }
    }
</script>
