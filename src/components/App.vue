<template>
    <div class="md:container md:m-auto flex flex-col">
        <div class="bg-peacock-lighter text-center py-4 font-sans mb-4">
            <h1 class="uppercase text-lg">
                {{title}}
            </h1>
        </div>
        <div class="text-center text-sm px-4">
            <slot name="header" />
        </div>
        <slot name="content" />
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
        }
    }
</script>
