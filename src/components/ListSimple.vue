<template>
    <div class="w-full">
        <ul class="list-reset w-full">
            <li v-for="(item, index) in data" :key="index"
                class="cursor-pointer p-4 w-full border-2 border-grey-lighter rounded mb-2 flex justify-between"
                :class="{'bg-grey-dark text-white': selected.includes(item)}"
                @click="toggle(item)">
                <div>
                    {{item.name}}
                </div>
                <div v-show="selected.includes(item)">
                    <span v-if="multiple && numberedSelect" class="px-3 py-1 rounded-full bg-grey-darkest">
                            {{selected.indexOf(item) + 1}}
                    </span>
                    <span v-else>
                        <i class="fa fa-check text-black"></i>
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "list-simple",
        props: {
            data: {
                type: Array,
                default: [],
                required: true,
            },
            preSelected: {
                type: Array,
                default: [],
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
        mounted() {
            this.selected = (this.preSelected) ? this.preSelected : [];
            this.data.forEach(item => console.log(typeof item))
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
                this.$emit('update', this.selected);
            }
        }
    }
</script>

<style scoped>

</style>