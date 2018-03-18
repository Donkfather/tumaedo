<template>
    <div class="text-center w-full">
        <h1>Welcome</h1>
    </div>
</template>

<script>
    export default {
        name: "welcome",
        mounted() {
            window.setTimeout(() => {
                Bus.$emit('restart');
            }, 2000);
        }
    }
</script>