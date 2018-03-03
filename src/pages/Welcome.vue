<template>
    <div class="text-center w-full">
        <h1>Welcome</h1>
    </div>
</template>

<script>
    export default {
        name: "welcome",
        mounted(){
            window.setTimeout(()=>{this.$router.push('/player-order')},2000);
        }
    }
</script>