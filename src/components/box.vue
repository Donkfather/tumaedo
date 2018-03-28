<template>
    <div v-if="box.blocked" class=" my-auto h-1 w-full bg-scarlet"></div>
    <div v-else class="flex flex-col h-full" @click="$emit('options',coordinates)">
        <div v-show="box.state === false"
             class="flex-1 text-scarlet flex justify-center items-center text-3xl select-none">
            <i class="fa fa-times"></i>
        </div>
        <div v-show="box.state === true"
             class="flex-1 text-green flex justify-center items-center text-3xl select-none">
            <i class="fa fa-check"></i>
        </div>
        <div class="absolute pin-b w-full">

            <div class="numbers flex w-full select-none" style="font-size: 9px;">
                <div class="w-1/5">
                    <span v-show="box[1]">
                       1
                    </span>
                </div>
                <div class="w-1/5">
                    <span v-show="box[2]">
                       2
                    </span>
                </div>
                <div class="w-1/5">
                    <span v-show="box[3]">
                       3
                    </span>
                </div>
                <div class="w-1/5">
                    <span v-show="box[4]">
                       4
                    </span>
                </div>
                <div class="w-1/5">
                    <span v-show="box[5]">
                       5
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "box",
        props: ['coordinates', 'box'],
    }
</script>
