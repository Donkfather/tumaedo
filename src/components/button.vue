<template>
    <button
            class="bg-peacock text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 hover:border-t-2 border-peacock-dark hover:border-peacock rounded"
            @click="$emit('click')"
    >
        {{text}}
    </button>
</template>

<script>
    export default {
        name: "v-button",
        props: ['text']
    }
</script>