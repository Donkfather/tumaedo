<template>
    <div>
        <button class="bg-peacock text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 hover:border-t-2 border-peacock-dark hover:border-peacock rounded"
                @click="nextState(nextRoute)"
        >
            Next &rarr;
        </button>
    </div>
</template>

<script>
    export default {
        name: "nav-buttons",
        props: ['nextRoute'],
        methods: {
            nextState: (next) => {
                Bus.$emit('next-step',next);
            },
        }
    }
</script>
