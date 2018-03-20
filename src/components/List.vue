<template>
    <div class="flex flex-wrap justify-around md:-mx-8" >
        <div v-for="(item, index) in data" :key="index"
             class="text-center mb-4 cursor-pointer md:px-4"
             @click="toggle(item)">
            <div class="relative mb-3 overflow-hidden shadow shadow-md bg-grey-light">
                <div class="bg-grey-darkest absolute w-full opacity-50 flex justify-center items-center"
                     style="height: 95%;"
                     v-if="selected.includes(item)">
                        <div v-if="preSelected.includes(item)"
                              class="text-5xl text-white"
                        >
                            <div v-if="multiple && numberedSelect">
                                {{preSelected.indexOf(item)+1}}
                            </div>
                            <div v-else>
                                <i class="fa fa-check text-white"></i>
                            </div>
                        </div>
                </div>
                <img :src="item.img" alt="Item"
                     class="w-full"
                     style="max-width: 160px;">
            </div>
            <span class="font-bold uppercase text-sm tracking-wide">
                    {{item.name}}
                </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "list",
        props: {
            data: {
                type: Array,
                default: [],
                required: true,
            },
            preSelected:{
              type: Array,
            },
            multiple: {
                type: Boolean,
                default: false
            },
            numberedSelect: {
                type: Boolean,
                default: true
            }
        },
        beforeMount() {
          this.selected = (this.preSelected)?this.preSelected:[];
        },
        data() {
            return {
                selected: [],
            }
        },
        methods: {
            toggle(item) {
                let index = this.selected.indexOf(item);
                if (this.multiple) {
                    if (index >= 0 && index === this.selected.length - 1) {
                        this.selected.splice(index, 1)
                        this.$emit('deselect', this.selected)
                    } else if (index === -1) {
                        this.selected.push(item)
                        this.$emit('select', this.selected)
                    }
                }
                else {
                    if (index < 0) {
                        this.selected = [item];
                    }
                }
                this.$emit('update',this.selected);
            }
        }
    }
</script>

<style scoped>

</style>